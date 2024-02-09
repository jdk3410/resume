# Dockerfile
# Stage 1 - the build process
FROM node:21-alpine3.18 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.25.3-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]