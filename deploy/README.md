# VPS deployment

The production site is a Next.js static export served by Caddy. Releases live
under `/srv/quiz-platform/releases/`, and `/srv/quiz-platform/releases/current`
points to the active release. Caddy reads only that `releases/current` link.

## Build and verify

Run the same checks used by GitHub Actions before publishing:

```powershell
npm ci
npm audit --audit-level=high
npm run lint
npm run typecheck
npm test
npm run audit:flagship
npm run audit:a11y
npm run build
```

The deployable artifact is the generated `out/` directory.

## Publish a release

Keep the SSH host, user, and key outside the repository:

```powershell
$release = (Get-Date).ToUniversalTime().ToString("yyyyMMddHHmmss")
$archive = Join-Path $env:TEMP "quiz-platform-$release.tar"
$remote = "$env:DEPLOY_USER@$env:DEPLOY_HOST"

tar -C out -cf $archive .
scp -i $env:DEPLOY_KEY $archive "${remote}:/tmp/quiz-platform-$release.tar"

ssh -i $env:DEPLOY_KEY $remote @"
set -e
target=/srv/quiz-platform/releases/$release
install -d -m 0755 "`$target"
tar -xf /tmp/quiz-platform-$release.tar -C "`$target"
find "`$target" -type d -exec chmod 0755 {} +
find "`$target" -type f -exec chmod 0644 {} +
rm -f /srv/quiz-platform/releases/.current-$release
ln -s "`$target" /srv/quiz-platform/releases/.current-$release
mv -Tf /srv/quiz-platform/releases/.current-$release /srv/quiz-platform/releases/current
rm -f /tmp/quiz-platform-$release.tar
"@

Remove-Item -LiteralPath $archive
```

The permission normalization is required because files copied from Windows can
otherwise retain overly broad modes.

The production SSH key should belong to the dedicated `quizdeploy` account. That
account owns only `/srv/quiz-platform/releases/` and has no sudo access; Caddy
reads the release tree but is reloaded manually when its configuration changes.

## GitHub Actions deployment

Pushes to `main` run the full validation suite, package the resulting `out/`
directory, and deploy that exact artifact to the `production` environment. Pull
requests only run validation. Configure these **environment-scoped** values in
GitHub (never commit them):

- Variables: `VPS_HOST` and `VPS_USER=quizdeploy`
- Secrets: `VPS_DEPLOY_SSH_KEY` (the dedicated private key) and
  `VPS_KNOWN_HOSTS` (the manually verified SSH host-key line)

Each release directory is named with the 40-character commit SHA. The workflow
validates required files before atomically moving
`/srv/quiz-platform/releases/current`; failed uploads leave the previous
release active. Keep several old release directories for rollback.

## Install Caddy configuration

```powershell
$remote = "$env:DEPLOY_USER@$env:DEPLOY_HOST"
scp -i $env:DEPLOY_KEY deploy/Caddyfile "${remote}:/tmp/quiz-platform-Caddyfile"
ssh -i $env:DEPLOY_KEY $remote @"
set -e
sudo install -o root -g root -m 0644 /tmp/quiz-platform-Caddyfile /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
sudo systemctl is-active caddy
"@
```

Run the Caddy installation step only when `deploy/Caddyfile` changes. Static
release publishes do not require a Caddy reload.

## DNS

Cloudflare should contain these web records while preserving unrelated records,
especially MX records:

- Apex `A` record points to the VPS public IPv4 address.
- `www` is a `CNAME` to `loveuu.xyz`.
- `beta` may remain as a DNS-only `A` record for direct-origin smoke checks. It
  serves the active production release and sends `X-Robots-Tag: noindex,
  nofollow`; it is not a separate staging environment.

## Verify and roll back

```powershell
curl.exe -fsSI https://loveuu.xyz/
curl.exe -fsSI https://www.loveuu.xyz/
curl.exe -sSI https://beta.loveuu.xyz/
curl.exe -sSI https://loveuu.xyz/does-not-exist
curl.exe -fsS https://loveuu.xyz/healthz
```

The beta response must include `X-Robots-Tag: noindex, nofollow`. The missing
path must return the branded page with status `404`, not a successful fallback.

To roll back, atomically repoint `current` to a known-good release and reload
Caddy only if its configuration also changed. Replace `<release>` locally before
running the commands:

```bash
ln -s /srv/quiz-platform/releases/<release> /srv/quiz-platform/releases/.rollback
mv -Tf /srv/quiz-platform/releases/.rollback /srv/quiz-platform/releases/current
```

Caddy access logging is intentionally not enabled. Operational service events
remain available through `journalctl -u caddy`.
