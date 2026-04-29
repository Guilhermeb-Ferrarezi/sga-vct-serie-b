import app from "./dist/server/server.js";

const port = Number(process.env.PORT ?? 3000);
const hostname = process.env.HOST ?? "0.0.0.0";

Bun.serve({
  port,
  hostname,
  fetch(request) {
    return app.fetch(request, process.env as never, {
      waitUntil() {},
      passThroughOnException() {},
    } as never);
  },
});

console.log(`Server running at http://${hostname}:${port}`);
