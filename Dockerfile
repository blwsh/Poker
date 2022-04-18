FROM node:16-alpine AS base
WORKDIR /src
COPY ./src .

FROM base AS build
RUN npm install && npm run build

FROM build AS dev
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]

FROM node:16-alpine
COPY --from=build /src /src
