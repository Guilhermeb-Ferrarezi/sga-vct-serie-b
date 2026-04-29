import app from "./dist/server/server.js";
import { existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { APP_BASE_PATH, APP_PATH } from "./src/lib/app-path";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";
const basePath = APP_BASE_PATH;
const clientDir = resolve(fileURLToPath(new URL(".", import.meta.url)), "dist/client");
const assetsDir = join(clientDir, "assets");

async function serveStatic(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === basePath || url.pathname === APP_PATH) {
    return null;
  }

  if (url.pathname.startsWith(`${APP_PATH}assets/`)) {
    const assetPath = url.pathname.slice(`${APP_PATH}assets/`.length);
    const filePath = join(assetsDir, assetPath);
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      return new Response(Bun.file(filePath));
    }
  }

  if (url.pathname.startsWith(APP_PATH)) {
    const relPath = url.pathname.slice(basePath.length + 1);
    const filePath = join(clientDir, relPath);
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      return new Response(Bun.file(filePath));
    }
  }

  return null;
}

Bun.serve({
  port,
  hostname,
  async fetch(request) {
    const staticResponse = await serveStatic(request);
    if (staticResponse) return staticResponse;

    return app.fetch(request, process.env as never, {
      waitUntil() {},
      passThroughOnException() {},
    } as never);
  },
});

console.log(`Server running at http://${hostname}:${port}`);
