FROM node:24-alpine AS build

WORKDIR /workspace

RUN corepack enable

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter @app/api build

RUN pnpm --filter @app/api --prod deploy /prod/api


FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=build /prod/api ./

EXPOSE 3000

CMD ["node", "dist/server.js"]