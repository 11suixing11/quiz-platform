import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "out");
const basePath = "/quiz-platform";
const port = Number(process.env.PORT || 3333);

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function sendText(response, statusCode, body, headers = {}) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    ...headers,
  });
  response.end(body);
}

function toOutputPath(requestPath) {
  if (requestPath === "/") return null;
  const relativePath = requestPath.startsWith(`${basePath}/`)
    ? requestPath.slice(basePath.length)
    : requestPath;
  const decodedPath = decodeURIComponent(relativePath || "/");
  const resolved = path.resolve(outputRoot, `.${decodedPath}`);
  if (resolved !== outputRoot && !resolved.startsWith(`${outputRoot}${path.sep}`)) return null;
  return resolved;
}

async function resolveFile(requestPath) {
  const candidate = toOutputPath(requestPath);
  if (!candidate) return null;

  try {
    const stat = await fs.stat(candidate);
    if (stat.isFile()) return candidate;
    if (stat.isDirectory()) {
      const indexPath = path.join(candidate, "index.html");
      await fs.access(indexPath);
      return indexPath;
    }
  } catch {
    // Try the static-export route convention below.
  }

  if (!path.extname(candidate)) {
    const routeIndex = path.join(candidate, "index.html");
    try {
      await fs.access(routeIndex);
      return routeIndex;
    } catch {
      return null;
    }
  }
  return null;
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    const requestPath = requestUrl.pathname;

    if (requestPath === "/" || requestPath === basePath) {
      response.writeHead(302, { Location: `${basePath}/` });
      response.end();
      return;
    }

    const filePath = await resolveFile(requestPath);
    if (!filePath) {
      const notFoundPath = path.join(outputRoot, "404.html");
      response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      createReadStream(notFoundPath).pipe(response);
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const stat = await fs.stat(filePath);
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[extension] || "application/octet-stream",
      "Content-Length": stat.size,
      "Cache-Control": "no-cache",
    });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    sendText(response, 500, "Unable to serve the static export.");
    console.error(error);
  }
});

server.listen(port, () => {
  console.log(`Serving ${outputRoot}`);
  console.log(`Local: http://localhost:${port}${basePath}/`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
