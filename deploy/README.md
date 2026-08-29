# VPS deployment

Production is a self-hosted Next.js standalone release. The packaged `server.js` is a supervisor: it starts Next's generated `next-server.js` and a separate `media-worker.mjs` child process under the existing `quiz-platform.service`. Caddy terminates TLS, serves processed public journal variants from disk, and reverse-proxies all other requests to `127.0.0.1:3333`.

Releases live under `/srv/quiz-platform/releases/`, with `releases/current` pointing to the active release. Durable state stays outside release directories:

```text
/var/lib/quiz-platform/app.sqlite3
/var/lib/quiz-platform/media/{private,public,tmp}
/var/lib/quiz-platform/backups/
```

Repository support for this architecture does not prove that production Turnstile, SMTP, administrator ids, Caddy rules, or backups are configured. Verify each item after deployment.

## Build and verify

Run the same gate used by GitHub Actions:

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

The deployable directory is `.next/standalone/`. It must contain at least:

- `server.js`, the supervisor entry point
- `next-server.js`, the generated Next.js server
- `media-worker.mjs`, `media-backup.mjs`, and `media-restore.mjs`
- `public/` and `.next/static/`
- the Linux x64 `better-sqlite3` native addon
- the Linux x64 Sharp runtime, including its traced `sharp` and `@img` packages

The production host is Ubuntu 24.04 x86_64 with Node 22. Build the artifact on a matching Linux x86_64 runner. A standalone directory produced from Windows or macOS dependencies must not be uploaded.

After packaging, a local production-style run starts both Next and the worker:

```bash
NODE_ENV=production \
PORT=3333 \
DATABASE_PATH="$PWD/.data/test.sqlite" \
MEDIA_ROOT="$PWD/.data/media" \
BACKUP_ROOT="$PWD/.data/backups" \
npm start
```

During ordinary `npm run dev`, start `npm run media:worker` in a second terminal or uploads will remain in `processing`.

## Server prerequisites

Install Node.js 22, create the restricted `quizdeploy` user, and prepare release and durable directories. The two `0711` directories allow Caddy to traverse a known public path without listing the directory; `private` and `tmp` remain inaccessible to Caddy.

```bash
install -d -o quizdeploy -g quizdeploy -m 0711 /var/lib/quiz-platform
install -d -o quizdeploy -g quizdeploy -m 0711 /var/lib/quiz-platform/media
install -d -o quizdeploy -g quizdeploy -m 0750 /var/lib/quiz-platform/media/private
install -d -o quizdeploy -g quizdeploy -m 0750 /var/lib/quiz-platform/media/private/quarantine
install -d -o quizdeploy -g quizdeploy -m 0750 /var/lib/quiz-platform/media/tmp
install -d -o quizdeploy -g quizdeploy -m 0755 /var/lib/quiz-platform/media/public
install -d -o quizdeploy -g quizdeploy -m 0750 /var/lib/quiz-platform/backups
install -d -o quizdeploy -g quizdeploy -m 0755 /srv/quiz-platform/releases/.incoming
install -d -o root -g root -m 0755 /etc/quiz-platform
```

Public revision directories and files must remain `0755` and `0644`. Private and temporary directories remain `0750`, with private variants created as `0640`. Do not add the Caddy user to the `quizdeploy` group; that would grant OS-level read access to private media.

Install [quiz-platform.service](./quiz-platform.service) as `/etc/systemd/system/quiz-platform.service` and [quiz-platform.sudoers](./quiz-platform.sudoers) as the corresponding restricted sudoers entry. The service unit still executes `releases/current/server.js`; no second media-worker unit is required because the packaged supervisor owns both child processes.

Runtime configuration belongs in `/etc/quiz-platform/quiz-platform.env`, mode `0640`, owned by root and readable by `quizdeploy`. The auth, Turnstile, SMTP, and administrator values below require real production configuration:

```dotenv
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=https://knowyourself.cc.cd

TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
TURNSTILE_ALLOWED_HOSTNAMES=knowyourself.cc.cd

SMTP_HOST=...
SMTP_PORT=587
SMTP_FROM=...
SMTP_USER=...
SMTP_PASSWORD=...
SMTP_SECURE=false

JOURNAL_ADMIN_USER_ID=...

# Explicit durable paths are recommended; these are also the production defaults.
MEDIA_ROOT=/var/lib/quiz-platform/media
BACKUP_ROOT=/var/lib/quiz-platform/backups

# Optional worker tuning; 1000 ms is the default.
MEDIA_WORKER_POLL_MS=1000
```

`TURNSTILE_SITE_KEY` is returned to the client at runtime by `/api/config/turnstile`; `/api/config/account` exposes only boolean email-verification and registration capabilities. Registration and resend requests fail closed with `503` when their runtime configuration is incomplete. The deployment smoke test requires both account capabilities to be `true` and the Turnstile site key to be non-empty, otherwise the release is rolled back. `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is compatibility-only and does not need to be a GitHub build variable. `SMTP_USER` and `SMTP_PASSWORD` must both be present or both be omitted. Port 465 implies secure SMTP; otherwise set `SMTP_SECURE=true` only when required by the provider. `JOURNAL_ADMIN_USER_ID` has the compatibility alias `ADMIN_USER_ID`; although the parser accepts comma-separated ids, the current production design configures exactly one operator account.

The unit supplies `NODE_ENV=production`, `HOSTNAME=127.0.0.1`, `PORT=3333`, and `DATABASE_PATH=/var/lib/quiz-platform/app.sqlite3`. Generate `BETTER_AUTH_SECRET` on the server, for example with `openssl rand -base64 32`. Never commit secrets or real administrator ids.

```bash
systemctl daemon-reload
systemctl enable quiz-platform
systemctl restart quiz-platform
systemctl is-active quiz-platform
systemctl status quiz-platform --no-pager
```

The supervisor restarts a failed worker with bounded backoff. If Next exits, systemd restarts the whole service. Application and worker logs both appear under `journalctl -u quiz-platform`.

## Caddy

[Caddyfile](./Caddyfile) serves `/media/public/*` directly from `/var/lib/quiz-platform/media/public` with immutable caching. Private media continues through the authenticated application API. Hiding, unpublishing, permanent removal, and deletion move or remove the corresponding public files before the state change is exposed, so a fresh origin request no longer resolves the path. Previously cached third-party copies cannot be recalled.

GitHub Actions does not install or reload Caddy. Apply this repository file manually whenever its rules change:

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

Before relying on direct serving, verify on the VPS:

```bash
namei -l /var/lib/quiz-platform/media/public
sudo -u caddy test -x /var/lib/quiz-platform
sudo -u caddy test -x /var/lib/quiz-platform/media
sudo -u caddy test -r /var/lib/quiz-platform/media/public
sudo -u caddy test ! -r /var/lib/quiz-platform/media/private
```

`beta.loveuu.xyz` and `quiz.107-151-246-167.sslip.io` remain no-index origin probes. Legacy `loveyourself.cc.cd` and `loveuu.xyz` hosts permanently redirect to `knowyourself.cc.cd`.

## GitHub Actions deployment

Pushes to `main` run the full validation suite, build on Ubuntu 24.04 with Node 22, prepare the standalone supervisor, verify native runtime packages, and deploy that exact artifact to the `production` environment. Pull requests run validation only.

Configure these GitHub environment values, never repository files:

- Variables: `VPS_HOST` and `VPS_USER=quizdeploy`
- Secrets: `VPS_DEPLOY_SSH_KEY` and `VPS_KNOWN_HOSTS`

Turnstile, SMTP, auth, media, backup, and administrator configuration stays in the VPS environment file. The deploy account needs release-tree access and only the service restart/status permissions in the sudoers file; it does not need permission to reload Caddy.

The workflow atomically switches `releases/current`, restarts the supervisor, and probes the application origin. After the HTTP probes have triggered database migrations, it locates the supervisor's unique direct `media-worker.mjs` child and requires both process ids to remain unchanged for ten seconds. Startup, route, or process-stability failures restore the previous release. Application rollback does not roll back SQLite or media state.

## Manual release

Prefer GitHub Actions. For a manual release, create the artifact on Linux x86_64 with `npm ci`, `npm run build`, and `npm run package:standalone`, then upload it using credentials kept outside the repository.

Validate the extracted release before activation:

```bash
test -f "$staging/server.js"
test -f "$staging/next-server.js"
test -f "$staging/media-worker.mjs"
test -f "$staging/media-backup.mjs"
test -f "$staging/media-restore.mjs"
test -d "$staging/public"
test -d "$staging/.next/static"
test -f "$staging/node_modules/better-sqlite3/build/Release/better_sqlite3.node"
test -f "$staging/node_modules/sharp/package.json"
TARGET="$staging" /usr/bin/node - <<'NODE'
const Database = require(`${process.env.TARGET}/node_modules/better-sqlite3`);
const sharp = require(`${process.env.TARGET}/node_modules/sharp`);
const database = new Database(":memory:");
database.exec("SELECT 1");
database.close();
sharp({ create: { width: 1, height: 1, channels: 3, background: "#fff" } })
  .webp()
  .toBuffer()
  .then(() => process.exit(0), () => process.exit(1));
NODE
```

After validation, move the SHA-named staging directory into the release tree, atomically update `releases/current`, and restart `quiz-platform.service`. Keep several old release directories for application rollback.

## Backups and restore

The media worker checks once per hour whether the current UTC date already has a snapshot. At most one automatic snapshot is created per day under `/var/lib/quiz-platform/backups`; snapshots older than 30 days are pruned. A snapshot contains:

- a SQLite online backup
- referenced private and public variants
- quarantined media for hidden revisions
- a versioned `manifest.json`

Original pending uploads are deliberately excluded. In the snapshot database, queued or running upload jobs are marked failed, their temporary keys are cleared, and affected entries return to draft so the owner can select the file again after a restore. This keeps EXIF/GPS-bearing originals out of the 30-day backup set.

This is a same-VPS consistency snapshot, not protection from host or disk failure.

Create an explicit snapshot without restarting the service:

```bash
sudo -u quizdeploy env \
  NODE_ENV=production \
  DATABASE_PATH=/var/lib/quiz-platform/app.sqlite3 \
  MEDIA_ROOT=/var/lib/quiz-platform/media \
  BACKUP_ROOT=/var/lib/quiz-platform/backups \
  /usr/bin/node /srv/quiz-platform/releases/current/media-backup.mjs --force
```

Inspect the emitted JSON and the snapshot `manifest.json`. Do not treat a directory without a valid manifest as a restorable snapshot.

Restore only while the application is stopped. The restore command validates and stages SQLite plus all three media scopes before switching live paths, removes stale SQLite WAL/SHM sidecars, replays pending deletion tombstones, and keeps the staged public tree unreadable by Caddy until the matching database is active. A `.media.restore-in-progress` marker beside the media root makes the application and worker fail closed if the process is interrupted.

```bash
snapshot=/var/lib/quiz-platform/backups/<snapshot-directory>
sudo systemctl stop quiz-platform
sudo -u quizdeploy env \
  NODE_ENV=production \
  DATABASE_PATH=/var/lib/quiz-platform/app.sqlite3 \
  MEDIA_ROOT=/var/lib/quiz-platform/media \
  RESTORE_CONFIRM=1 \
  /usr/bin/node /srv/quiz-platform/releases/current/media-restore.mjs --snapshot "$snapshot"
sudo systemctl start quiz-platform
sudo systemctl is-active quiz-platform
```

If restore is interrupted or reports an incomplete rollback, do not start the service. Re-run a verified restore or manually recover the preserved `.media.pre-restore-*` and database sidecar paths, then remove the marker only after SQLite and media are known to match.

After restore, verify the owner library, one public journal, one private media request, one discarded pending upload requiring a new file selection, a deleted-media tombstone case, and the Caddy permission checks above. A data restore is independent of release rollback and should use an application version compatible with the snapshot schema.

## Production verification

Basic origin and redirect checks:

```powershell
curl.exe -fsSI https://knowyourself.cc.cd/
curl.exe -fsSI https://knowyourself.cc.cd/assessments/
curl.exe -fsSI https://knowyourself.cc.cd/journal/
curl.exe -fsSI https://knowyourself.cc.cd/community/
curl.exe -fsSI https://knowyourself.cc.cd/complaints/
curl.exe -fsSI https://knowyourself.cc.cd/privacy/
curl.exe -fsSI https://www.knowyourself.cc.cd/
curl.exe -fsSI https://loveyourself.cc.cd/
curl.exe -sSI https://beta.loveuu.xyz/
curl.exe -sSI https://knowyourself.cc.cd/does-not-exist
curl.exe -fsS https://knowyourself.cc.cd/healthz
curl.exe -fsS https://knowyourself.cc.cd/api/auth/get-session
curl.exe -fsS https://knowyourself.cc.cd/api/config/turnstile
```

Expected results:

- `/healthz` returns `ok`; the unauthenticated session endpoint returns JSON `null`.
- The runtime Turnstile endpoint returns a non-null public site key. Then complete a real registration and `journal_upload` challenge against the configured production hostname.
- A real verification email arrives through the configured SMTP provider, and the verified session can create a journal.
- The configured administrator can open moderation data; a normal signed-in user receives no admin API access.
- `www` and legacy hosts return `301` and preserve path/query; beta responses include `X-Robots-Tag: noindex, nofollow`.
- `robots.txt` references `https://knowyourself.cc.cd/sitemap.xml`; the sitemap contains `/assessments/` and visible published journal routes only.
- A known public variant returns WebP with immutable caching. After hide, unpublish, or delete, a fresh request to that exact origin URL returns `404` and it disappears from Feed, detail, OG metadata, and sitemap.
- A new upload moves from `processing` to `ready`, proving the worker is alive. `journalctl -u quiz-platform` contains no restart loop or backup error.
- A daily snapshot and valid manifest exist under `/var/lib/quiz-platform/backups` after the worker's backup check.

## Rollback

To roll back only the application release:

```bash
release=<known-good-sha>
ln -s /srv/quiz-platform/releases/$release /srv/quiz-platform/releases/.rollback
mv -Tf /srv/quiz-platform/releases/.rollback /srv/quiz-platform/releases/current
sudo -n systemctl restart quiz-platform
sudo -n systemctl is-active quiz-platform
```

This does not restore SQLite or media. If the older release cannot understand the current schema or queued jobs, restore a compatible consistency snapshot using the stopped-service procedure instead. Operational events remain available through `journalctl -u quiz-platform` and `journalctl -u caddy`.
