# Build
FROM node:18-alpine as build
 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime

FROM node:18-alpine as runtime
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "start:prod"]