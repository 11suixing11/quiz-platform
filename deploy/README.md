# VPS deployment

The production site is a Next.js static export served by Caddy. Releases live
under `/srv/quiz-platform/releases/`, and `/srv/quiz-platform/current` points to
the active release.

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
sudo install -d -o root -g root -m 0755 "`$target"
sudo tar -xf /tmp/quiz-platform-$release.tar -C "`$target"
sudo chown -R root:root "`$target"
sudo find "`$target" -type d -exec chmod 0755 {} +
sudo find "`$target" -type f -exec chmod 0644 {} +
sudo ln -s "`$target" /srv/quiz-platform/.current-$release
sudo mv -Tf /srv/quiz-platform/.current-$release /srv/quiz-platform/current
sudo rm -f /tmp/quiz-platform-$release.tar
"@

Remove-Item -LiteralPath $archive
```

The permission normalization is required because files copied from Windows can
otherwise retain overly broad modes.

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

## DNS

Cloudflare should contain these web records while preserving unrelated records,
especially MX records:

- Apex `A` record points to the VPS public IPv4 address.
- `www` is a `CNAME` to `loveuu.xyz`.
- `beta` may remain as an `A` record for pre-production checks.

## Verify and roll back

```powershell
curl.exe -fsSI https://loveuu.xyz/
curl.exe -fsSI https://www.loveuu.xyz/
curl.exe -fsS https://loveuu.xyz/healthz
```

To roll back, atomically repoint `current` to a known-good release and reload
Caddy only if its configuration also changed. Replace `<release>` locally before
running the commands:

```bash
sudo ln -s /srv/quiz-platform/releases/<release> /srv/quiz-platform/.rollback
sudo mv -Tf /srv/quiz-platform/.rollback /srv/quiz-platform/current
```

Caddy access logging is intentionally not enabled. Operational service events
remain available through `journalctl -u caddy`.
