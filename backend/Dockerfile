FROM oven/bun:1.2.4 AS build

WORKDIR /app

COPY package*.json bun.lock ./

RUN bun install --frozen-lockfile --production

COPY . .

RUN bun prisma generate
EXPOSE 4200
CMD ["bun", "start:prod"]

# FROM oven/bun:latest

# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/package*.json /app/.env.production ./
# COPY --from=build /app/dist ./dist
# COPY --from=build /app/prisma ./prisma


# EXPOSE 4200
# CMD ["bun", "start:prod"]