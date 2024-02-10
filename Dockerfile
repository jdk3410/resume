# Dockerfile .  


# Stage 1 - Build stage
FROM node:21-alpine3.18 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN npm run build

# Stage 2 - Ubuntu, Nginx and Certbot stage
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y nginx certbot python3-certbot-dns-route53
COPY --from=build-deps /usr/src/app/build /var/www/html
COPY ./nginx.conf /etc/nginx/sites-available/default
EXPOSE 80
EXPOSE 443
CMD ["sh", "-c", "certbot certonly --force-renew --dns-route53 -d jdk3410.com -d '*.jdk3410.com' --agree-tos --email jkellner333@gmail.com --non-interactive && mkdir -p /etc/nginx/certs/ && cp /etc/letsencrypt/live/jdk3410.com/fullchain.pem /etc/nginx/certs/ && cp /etc/letsencrypt/live/jdk3410.com/privkey.pem /etc/nginx/certs/ && nginx -g 'daemon off;'"]
