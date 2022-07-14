FROM node:16-alpine3.16 as react-build
WORKDIR /app
ARG BUILD_TARGET
COPY . ./

ENV PORT 8080
ENV HOST 127.0.0.1
EXPOSE 8080

RUN npm install
RUN ./node_modules/.bin/nx run $BUILD_TARGET
CMD npx serve -s dist/apps/wedding-planner
