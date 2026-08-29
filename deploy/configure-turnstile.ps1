#requires -Version 7.0

<#
.SYNOPSIS
    Configure the production Turnstile widget.

.DESCRIPTION
    Reads the public site key and secret key locally, sends them through the
    SSH standard input stream, verifies the runtime endpoint, and atomically
    updates the production environment. The previous environment is restored
    automatically if the update or health check fails.

.PARAMETER HostName
    Production VPS address or host name.

.PARAMETER UserName
    SSH user. The production helper intentionally requires root.

.PARAMETER KeyPath
    SSH private key path.
#>

[CmdletBinding()]
param(
    [ValidatePattern('^0x[0-9A-Za-z_-]{20,80}\z')]
    [string] $SiteKey,

    [string] $HostName = $env:DEPLOY_HOST,

    [ValidatePattern('^[A-Za-z0-9._-]+\z')]
    [string] $UserName = 'root',
    [string] $KeyPath = $(
        if ($env:ADMIN_KEY) { $env:ADMIN_KEY }
        else { Join-Path (Join-Path $HOME '.ssh') 'quiz_platform_server_ed25519' }
    )
)

$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($HostName) -or $HostName -notmatch '^[A-Za-z0-9.-]+\z') {
    throw 'Set DEPLOY_HOST or pass -HostName with the production VPS host name or address.'
}
if ([string]::IsNullOrWhiteSpace($KeyPath) -or -not (Test-Path -LiteralPath $KeyPath -PathType Leaf)) {
    throw "SSH key was not found: $KeyPath"
}
if ($UserName -ne 'root') {
    throw 'This helper currently requires the root SSH account.'
}

$resolvedSiteKey = if ([string]::IsNullOrWhiteSpace($SiteKey)) {
    Read-Host 'Turnstile site key'
} else {
    $SiteKey
}
$resolvedSiteKey = $resolvedSiteKey.Trim()
if ($resolvedSiteKey -notmatch '^0x[0-9A-Za-z_-]{20,80}\z') {
    throw 'The Turnstile site key format is invalid.'
}

$secureSecret = Read-Host 'Turnstile secret key' -AsSecureString
$bstr = [IntPtr]::Zero
$secretKey = $null
$bytes = $null
$process = $null

try {
    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureSecret)
    $secretKey = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr) -replace '\s', ''
    if ($secretKey -notmatch '^0x[0-9A-Za-z_-]{20,80}\z') {
        throw 'The Turnstile secret key format is invalid.'
    }

    $remoteBody = @'
set -Eeuo pipefail

env_file=/etc/quiz-platform/quiz-platform.env
test -f "$env_file"
umask 077
backup=''
tmp=''
rollback_tmp=''
env_replaced=0

service_ready() {
  systemctl is-active --quiet quiz-platform || return 1
  for _ in $(seq 1 30); do
    if curl --fail --silent --output /dev/null --connect-timeout 3 --max-time 10 \
      -H 'Host: knowyourself.cc.cd' \
      http://127.0.0.1:3333/; then
      return 0
    fi
    sleep 1
  done
  return 1
}

finish() {
  status=$?
  trap - EXIT
  set +e
  rollback_status=0
  cleanup_status=0
  if [ "$env_replaced" -eq 1 ] && [ -n "$backup" ] && [ -f "$backup" ]; then
    rollback_tmp=$(mktemp /etc/quiz-platform/quiz-platform.env.turnstile-rollback.XXXXXX) || rollback_status=$?
    if [ "$rollback_status" -eq 0 ]; then
      install -o root -g quizdeploy -m 0640 "$backup" "$rollback_tmp" || rollback_status=$?
    fi
    if [ "$rollback_status" -eq 0 ]; then
      mv -Tf "$rollback_tmp" "$env_file" || rollback_status=$?
    fi
    if [ -n "$rollback_tmp" ]; then rm -f "$rollback_tmp" || cleanup_status=$?; fi
    if [ "$rollback_status" -eq 0 ]; then
      systemctl restart quiz-platform >/dev/null 2>&1 || rollback_status=$?
    fi
    if [ "$rollback_status" -eq 0 ]; then
      service_ready || rollback_status=$?
    fi
  fi
  if [ -n "$tmp" ]; then rm -f "$tmp" || cleanup_status=$?; fi
  if [ "$rollback_status" -eq 0 ]; then
    if [ -n "$backup" ]; then rm -f "$backup" || cleanup_status=$?; fi
  else
    printf 'Automatic rollback failed; root backup retained at %s\n' "$backup" >&2
    exit "$rollback_status"
  fi
  if [ "$cleanup_status" -ne 0 ]; then
    printf 'Turnstile staging cleanup failed under /etc/quiz-platform\n' >&2
    exit "$cleanup_status"
  fi
  exit "$status"
}
trap finish EXIT

backup=$(mktemp /etc/quiz-platform/quiz-platform.env.turnstile-backup.XXXXXX)
tmp=$(mktemp /etc/quiz-platform/quiz-platform.env.turnstile-new.XXXXXX)
install -o root -g root -m 0600 "$env_file" "$backup"

declare -A replacements=(
  [TURNSTILE_SITE_KEY]="$turnstile_site_key"
  [TURNSTILE_SECRET_KEY]="$turnstile_secret_key"
  [TURNSTILE_ALLOWED_HOSTNAMES]='knowyourself.cc.cd'
)
declare -A seen=()

while IFS= read -r line || [ -n "$line" ]; do
  key=${line%%=*}
  if [[ "$line" == *=* && -v "replacements[$key]" ]]; then
    printf '%s=%s\n' "$key" "${replacements[$key]}" >> "$tmp"
    seen["$key"]=1
  else
    printf '%s\n' "$line" >> "$tmp"
  fi
done < "$env_file"

for key in TURNSTILE_SITE_KEY TURNSTILE_SECRET_KEY TURNSTILE_ALLOWED_HOSTNAMES; do
  if [[ ! -v "seen[$key]" ]]; then
    printf '%s=%s\n' "$key" "${replacements[$key]}" >> "$tmp"
  fi
done

chown root:quizdeploy "$tmp"
chmod 0640 "$tmp"
mv -Tf "$tmp" "$env_file"
env_replaced=1

systemctl restart quiz-platform
service_ready

config_json=$(curl --fail --silent --show-error --connect-timeout 3 --max-time 10 \
  -H 'Host: knowyourself.cc.cd' \
  http://127.0.0.1:3333/api/config/turnstile)
printf '%s' "$config_json" | grep -Fq "\"siteKey\":\"$turnstile_site_key\""

env_replaced=0
cleanup_status=0
if rm -f "$tmp"; then tmp=''; else cleanup_status=1; fi
if rm -f "$backup"; then backup=''; else cleanup_status=1; fi
if [ "$cleanup_status" -ne 0 ]; then
  printf 'Turnstile staging cleanup failed under /etc/quiz-platform\n' >&2
  exit "$cleanup_status"
fi
trap - EXIT
printf 'Turnstile configured and application restarted\n'
'@

    $payload = @(
        'IFS= read -r turnstile_site_key'
        $resolvedSiteKey
        'IFS= read -r turnstile_secret_key'
        $secretKey
        (($remoteBody -replace "`r`n", "`n") -replace "`r", "`n").Trim("`n")
    ) -join "`n"
    $payload += "`n"

    $sshPath = (Get-Command ssh -ErrorAction Stop).Source
    $startInfo = [Diagnostics.ProcessStartInfo]::new()
    $startInfo.FileName = $sshPath
    $startInfo.UseShellExecute = $false
    $startInfo.RedirectStandardInput = $true
    $startInfo.RedirectStandardOutput = $true
    $startInfo.RedirectStandardError = $true
    foreach ($argument in @(
        '-i', $KeyPath,
        '-o', 'BatchMode=yes',
        '-o', 'IdentitiesOnly=yes',
        '-o', 'StrictHostKeyChecking=yes',
        '-o', 'ConnectTimeout=15',
        '-T',
        "$UserName@$HostName",
        'bash -s'
    )) {
        [void] $startInfo.ArgumentList.Add($argument)
    }

    $process = [Diagnostics.Process]::new()
    $process.StartInfo = $startInfo
    if (-not $process.Start()) {
        throw 'Unable to start the SSH client.'
    }
    $stdoutTask = $process.StandardOutput.ReadToEndAsync()
    $stderrTask = $process.StandardError.ReadToEndAsync()
    $bytes = [Text.UTF8Encoding]::new($false).GetBytes($payload)
    $process.StandardInput.BaseStream.Write($bytes, 0, $bytes.Length)
    $process.StandardInput.BaseStream.Flush()
    $process.StandardInput.Close()
    $process.WaitForExit()
    $stdout = $stdoutTask.GetAwaiter().GetResult()
    $stderr = $stderrTask.GetAwaiter().GetResult()
    if ($stdout) { Write-Host $stdout.TrimEnd() }
    if ($stderr) { Write-Host $stderr.TrimEnd() }
    if ($process.ExitCode -ne 0) {
        throw "Remote Turnstile configuration failed with exit code $($process.ExitCode)."
    }
}
finally {
    if ($bstr -ne [IntPtr]::Zero) {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
    }
    if ($bytes) {
        [Security.Cryptography.CryptographicOperations]::ZeroMemory($bytes)
    }
    $resolvedSiteKey = $null
    $secretKey = $null
    $payload = $null
    $remoteBody = $null
    $bytes = $null
    if ($process) {
        try {
            if (-not $process.HasExited) {
                $process.Kill($true)
                [void] $process.WaitForExit(5000)
            }
        } catch {
            # Best-effort cleanup after an earlier SSH failure.
        }
        $process.Dispose()
    }
    $secureSecret = $null
}
