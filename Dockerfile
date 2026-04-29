FROM oven/bun:1 AS deps
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/bun.lockb ./bun.lockb
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.ts ./server.ts
COPY --from=build /app/src/lib/app-path.ts ./src/lib/app-path.ts

EXPOSE 3000

CMD ["bun", "server.ts"]
