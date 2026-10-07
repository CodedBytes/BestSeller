FROM node:24-alpine AS build

WORKDIR /workspace

RUN corepack enable

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter @app/web build


FROM nginx:alpine AS production

COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /workspace/apps/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]