# VPS deployment

The production service is a self-hosted Next.js standalone application. The
Node server handles rendered pages and `/api/*`; Caddy terminates TLS and
reverse-proxies to `127.0.0.1:3333`. Releases live under
`/srv/quiz-platform/releases/`, and `releases/current` points to the active
standalone release. User data is kept outside release directories at
`/var/lib/quiz-platform/app.sqlite3`.

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
npm run package:standalone
```

The deployable artifact is `.next/standalone/`. It must contain:

- `server.js`
- `public/`
- `.next/static/`
- `node_modules/better-sqlite3/build/Release/better_sqlite3.node`

The last file is a native Linux addon. This VPS is `linux-x64`, so the
standalone release must be built on a Linux x86_64 runner with Node 22. The
recommended path is the repository's GitHub Actions workflow: pushes to
`main` build on Ubuntu 24.04 and deploy that exact artifact. A standalone
directory produced by Windows or macOS `npm install` contains a PE/Mach-O
addon and must not be uploaded to this Ubuntu host.

Run locally with `NODE_ENV=production PORT=3333 DATABASE_PATH=$PWD/.data/test.sqlite npm start`.

## Server prerequisites

Install Node.js 22 (the same major version used by CI), create the restricted
`quizdeploy` user, and prepare durable directories:

```bash
install -d -o quizdeploy -g quizdeploy -m 0750 /var/lib/quiz-platform
install -d -o quizdeploy -g quizdeploy -m 0755 /srv/quiz-platform/releases/.incoming
install -d -o root -g root -m 0755 /etc/quiz-platform
```

Install [deploy/quiz-platform.service](./quiz-platform.service) as
`/etc/systemd/system/quiz-platform.service`. Optional secrets or runtime
overrides belong in `/etc/quiz-platform/quiz-platform.env` (mode `0640`, owned
by root and readable by `quizdeploy`). The unit sets `DATABASE_PATH` to the
durable path above and does not grant the app user shell or sudo access beyond
the two commands in [deploy/quiz-platform.sudoers](./quiz-platform.sudoers).

The environment file must define a strong random `BETTER_AUTH_SECRET` and the
canonical `BETTER_AUTH_URL=https://loveyourself.cc.cd`. Do not commit either
value. Generate the secret on the server, for example with `openssl rand -base64 32`.

```bash
systemctl daemon-reload
systemctl enable quiz-platform
# Start or restart only after a validated standalone release is active.
systemctl restart quiz-platform
systemctl is-active quiz-platform
```

## Publish a release manually (Linux artifact only)

Keep the SSH host, user, and key outside the repository. Prefer GitHub Actions
for a reproducible Linux build. For a manual release, run `npm ci`, `npm run
build`, and `npm run package:standalone` on Linux x86_64 (a Linux CI runner,
WSL with Linux Node/npm and a fresh Linux `npm ci`, or the VPS in a separate
build directory), then transfer the resulting archive. WSL must not use the
Windows Node executable or Windows `node_modules`. The PowerShell snippet below
is only a transfer step; it does not
make a Windows-built standalone directory safe to deploy:

```powershell
$release = (git rev-parse HEAD)
$archive = "C:\path\to\linux-built-quiz-platform-$release.tar.gz"
$remote = "$env:DEPLOY_USER@$env:DEPLOY_HOST"

scp -i $env:DEPLOY_KEY $archive "${remote}:/srv/quiz-platform/releases/.incoming/$release.tar.gz"
```

On the server, extract to a SHA-named directory, validate the required files,
atomically switch `releases/current`, and restart the service:

```bash
set -euo pipefail
release=<40-character-commit-sha>
releases=/srv/quiz-platform/releases
archive="$releases/.incoming/$release.tar.gz"
staging="$releases/.incoming/$release"
target="$releases/$release"
rm -rf "$staging"
mkdir "$staging"
tar -xzf "$archive" -C "$staging"
test -f "$staging/server.js"
test -d "$staging/public" && test -d "$staging/.next/static"
test -f "$staging/node_modules/better-sqlite3/build/Release/better_sqlite3.node"
mv "$staging" "$target"
ln -s "$target" "$releases/.current-$release"
mv -Tf "$releases/.current-$release" "$releases/current"
rm -f "$archive"
sudo -n systemctl restart quiz-platform
sudo -n systemctl is-active quiz-platform
```

The GitHub Actions workflow performs these checks, records the previous
release, and automatically restores it if the restart or origin smoke tests
fail. Keep several old SHA directories for manual rollback.

## Caddy

Install [deploy/Caddyfile](./Caddyfile) as `/etc/caddy/Caddyfile` with the
administrator account whenever proxy rules change:

```powershell
$remote = "$env:ADMIN_USER@$env:DEPLOY_HOST"
scp -i $env:ADMIN_KEY deploy/Caddyfile "${remote}:/tmp/quiz-platform-Caddyfile"
ssh -i $env:ADMIN_KEY $remote @"
set -e
sudo install -o root -g root -m 0644 /tmp/quiz-platform-Caddyfile /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
sudo systemctl is-active caddy
"@
```

The `beta.loveuu.xyz` and `quiz.107-151-246-167.sslip.io` hosts remain
no-index origin probes. Legacy `loveuu.xyz` hosts permanently redirect to the
canonical `loveyourself.cc.cd` host.

## GitHub Actions deployment

Pushes to `main` run the full validation suite, package the standalone
directory, and deploy that exact artifact to the `production` environment.
Pull requests only run validation. Configure these environment-scoped values
in GitHub, never in the repository:

- Variables: `VPS_HOST` and `VPS_USER=quizdeploy`
- Secrets: `VPS_DEPLOY_SSH_KEY` and `VPS_KNOWN_HOSTS`

The remote deploy account needs read/write access to the release tree and the
minimal sudoers entry described above. It does not need permission to reload
Caddy.

## Verify and roll back

```powershell
curl.exe -fsSI https://loveyourself.cc.cd/
curl.exe -fsSI https://www.loveyourself.cc.cd/
curl.exe -sSI https://beta.loveuu.xyz/
curl.exe -sSI https://loveyourself.cc.cd/does-not-exist
curl.exe -fsS https://loveyourself.cc.cd/healthz
curl.exe -fsS https://loveyourself.cc.cd/api/auth/get-session
```

The beta response must include `X-Robots-Tag: noindex, nofollow`; missing paths
must return the branded 404 with status `404`; `/healthz` must return `ok`; and
the unauthenticated session probe must return JSON `null`.

To roll back to a known-good release:

```bash
release=<known-good-sha>
ln -s /srv/quiz-platform/releases/$release /srv/quiz-platform/releases/.rollback
mv -Tf /srv/quiz-platform/releases/.rollback /srv/quiz-platform/releases/current
sudo -n systemctl restart quiz-platform
sudo -n systemctl is-active quiz-platform
```

Operational service events remain available through
`journalctl -u quiz-platform` and `journalctl -u caddy`.
