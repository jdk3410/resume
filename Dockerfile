# Dockerfile
  
# Stage 1 - Build stage
FROM node:21-alpine3.18 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN npm run build

# Stage 2 - Nginx stage
FROM nginx:1.25.3-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./letsencrypt/live/jdk3410.com/fullchain.pem /etc/letsencrypt/live/jdk3410.com/fullchain.pem
COPY ./letsencrypt/live/jdk3410.com/privkey.pem /etc/letsencrypt/live/jdk3410.com/privkey.pem
COPY ./nginx.conf /etc/nginx/cond.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
