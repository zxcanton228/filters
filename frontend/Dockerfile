# Stage 1: Build the application
FROM oven/bun:1.2.4 AS builder
WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile 

COPY . .

RUN bun run build

# Stage 2: Start the application production
FROM oven/bun:1.2.4 AS production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json /app/next.config.mjs /app/.env /app/bun.lock ./

RUN bun install --frozen-lockfile --production

EXPOSE 3000
CMD ["bun", "run", "start"]