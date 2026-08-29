#requires -Version 7.0

<#
.SYNOPSIS
    Configure Gmail SMTP for the production quiz-platform service.

.DESCRIPTION
    Reads a Gmail application password as a SecureString, sends it over the
    existing SSH connection without putting it in a command line, local file,
    or output, and verifies SMTP authentication before restarting the service.
    The remote environment file is restored automatically if any step fails.

.PARAMETER Email
    Gmail address used as SMTP user and From address.

.PARAMETER HostName
    Production VPS address or host name.

.PARAMETER UserName
    SSH user with permission to update the service environment.

.PARAMETER KeyPath
    SSH private key path.
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$')]
    [string] $Email,

    [string] $HostName = $env:DEPLOY_HOST,

    [ValidatePattern('^[A-Za-z0-9._-]+$')]
    [string] $UserName = 'root',
    [string] $KeyPath = $(
        if ($env:ADMIN_KEY) { $env:ADMIN_KEY }
        else { Join-Path $HOME '.ssh\quiz_platform_server_ed25519' }
    )
)

$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($HostName) -or $HostName -notmatch '^[A-Za-z0-9.-]+$') {
    throw 'Set DEPLOY_HOST or pass -HostName with the production VPS host name or address.'
}
if ([string]::IsNullOrWhiteSpace($KeyPath) -or -not (Test-Path -LiteralPath $KeyPath -PathType Leaf)) {
    throw "SSH key was not found: $KeyPath"
}
if ($UserName -ne 'root') {
    throw 'This helper currently requires the root SSH account.'
}

$securePassword = Read-Host 'Gmail app password (16 characters; spaces are removed)' -AsSecureString
$bstr = [IntPtr]::Zero
$password = $null
$bytes = $null
$process = $null

try {
    $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)
    $password = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr) -replace '\s', ''
    if ($password -notmatch '^[A-Za-z0-9]{16}$') {
        throw 'The Gmail app password must contain 16 ASCII letters or digits after spaces are removed.'
    }

    $remoteBody = @'
set -Eeuo pipefail

env_file=/etc/quiz-platform/quiz-platform.env
test -f "$env_file"
command -v python3 >/dev/null

umask 077
backup=''
tmp=''
env_replaced=0
finish() {
  status=$?
  trap - EXIT
  set +e
  rollback_status=0
  if [ "$env_replaced" -eq 1 ] && [ -f "$backup" ]; then
    rollback_tmp=$(mktemp /etc/quiz-platform/quiz-platform.env.gmail-rollback.XXXXXX) || rollback_status=$?
    if [ "$rollback_status" -eq 0 ]; then
      install -o root -g quizdeploy -m 0640 "$backup" "$rollback_tmp" || rollback_status=$?
    fi
    if [ "$rollback_status" -eq 0 ]; then
      mv -Tf "$rollback_tmp" "$env_file" || rollback_status=$?
    fi
    rm -f "${rollback_tmp:-}"
    if [ "$rollback_status" -eq 0 ]; then
      systemctl restart quiz-platform >/dev/null 2>&1 || rollback_status=$?
    fi
  fi
  if [ -n "$tmp" ]; then
    rm -f "$tmp"
  fi
  if [ "$rollback_status" -eq 0 ]; then
    if [ -n "$backup" ]; then
      rm -f "$backup"
    fi
  else
    printf 'Automatic rollback failed; root backup retained at %s\n' "$backup" >&2
    exit "$rollback_status"
  fi
  exit "$status"
}
trap finish EXIT

backup=$(mktemp /etc/quiz-platform/quiz-platform.env.gmail-backup.XXXXXX)
tmp=$(mktemp /etc/quiz-platform/quiz-platform.env.gmail-new.XXXXXX)
install -o root -g root -m 0600 "$env_file" "$backup"

declare -A replacements=(
  [SMTP_HOST]='smtp.gmail.com'
  [SMTP_PORT]='465'
  [SMTP_FROM]="$smtp_from"
  [SMTP_USER]="$smtp_from"
  [SMTP_PASSWORD]="$smtp_password"
  [SMTP_SECURE]='true'
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

for key in SMTP_HOST SMTP_PORT SMTP_FROM SMTP_USER SMTP_PASSWORD SMTP_SECURE; do
  if [[ ! -v "seen[$key]" ]]; then
    printf '%s=%s\n' "$key" "${replacements[$key]}" >> "$tmp"
  fi
done

SMTP_HOST='smtp.gmail.com' \
SMTP_PORT='465' \
SMTP_USER="$smtp_from" \
SMTP_PASSWORD="$smtp_password" \
python3 <<'PYTHON'
import os
import smtplib
import ssl
import sys

try:
    with smtplib.SMTP_SSL(
        os.environ["SMTP_HOST"],
        int(os.environ["SMTP_PORT"]),
        context=ssl.create_default_context(),
        timeout=15,
    ) as client:
        client.login(os.environ["SMTP_USER"], os.environ["SMTP_PASSWORD"])
except smtplib.SMTPAuthenticationError as error:
    print(f"SMTP authentication failed (server code {error.smtp_code})", file=sys.stderr)
    raise SystemExit(1)
except (OSError, smtplib.SMTPException):
    print("SMTP authentication failed", file=sys.stderr)
    raise SystemExit(1)

print("SMTP authentication verified")
PYTHON

chown root:quizdeploy "$tmp"
chmod 0640 "$tmp"
mv -Tf "$tmp" "$env_file"
env_replaced=1

systemctl restart quiz-platform
systemctl is-active --quiet quiz-platform
ready=0
for _ in $(seq 1 30); do
  if curl --fail --silent --output /dev/null \
    -H 'Host: knowyourself.cc.cd' \
    http://127.0.0.1:3333/; then
    ready=1
    break
  fi
  sleep 1
done
[ "$ready" -eq 1 ]

env_replaced=0
trap - EXIT
rm -f "$backup" "$tmp"
'@

    # The first two commands in the payload consume the two following lines.
    # This keeps both the password and address out of the SSH command line.
    $payload = @(
        'IFS= read -r smtp_password'
        $password
        'IFS= read -r smtp_from'
        $Email
        (($remoteBody -replace "`r`n", "`n") -replace "`r", "`n").Trim("`n")
    ) -join "`n"
    $payload += "`n"

    $sshPath = (Get-Command ssh.exe -ErrorAction Stop).Source
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
    $utf8 = [Text.UTF8Encoding]::new($false)
    $bytes = $utf8.GetBytes($payload)
    $process.StandardInput.BaseStream.Write($bytes, 0, $bytes.Length)
    $process.StandardInput.BaseStream.Flush()
    $process.StandardInput.Close()
    $process.WaitForExit()
    $stdout = $stdoutTask.GetAwaiter().GetResult()
    $stderr = $stderrTask.GetAwaiter().GetResult()
    if ($stdout) {
        Write-Host $stdout.TrimEnd()
    }
    if ($stderr) {
        Write-Host $stderr.TrimEnd()
    }
    if ($process.ExitCode -ne 0) {
        throw "Remote Gmail SMTP configuration failed with exit code $($process.ExitCode)."
    }
    Write-Host 'Gmail SMTP configured and application restarted'
}
finally {
    if ($bstr -ne [IntPtr]::Zero) {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
    }
    $password = $null
    $payload = $null
    $remoteBody = $null
    if ($bytes) {
        [Security.Cryptography.CryptographicOperations]::ZeroMemory($bytes)
    }
    $bytes = $null
    if ($process) {
        $process.Dispose()
    }
    $securePassword = $null
}
