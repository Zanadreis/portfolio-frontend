# Dockerfile
FROM node:18.18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.18-alpine AS runtime

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
USER node
CMD ["npm", "start"]