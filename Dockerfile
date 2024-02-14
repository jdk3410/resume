# Dockerfile

# Stage 1 - Build stage
FROM node:21-alpine3.18 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
ARG REACT_APP_GIT_BRANCH
ARG REACT_APP_VERSION
ENV REACT_APP_GIT_BRANCH=$REACT_APP_GIT_BRANCH
ENV REACT_APP_VERSION=$REACT_APP_VERSION
#RUN npm test - this seems to be causing the docker build to hang
RUN npm run build

# Stage 2 - Nginx stage
FROM nginx:1.25.3-alpine
ARG DOMAIN_NAME
ENV DOMAIN_NAME=$DOMAIN_NAME
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./letsencrypt/live/$DOMAIN_NAME/fullchain.pem /etc/nginx/certs/fullchain.pem
COPY ./letsencrypt/live/$DOMAIN_NAME/privkey.pem /etc/nginx/certs/privkey.pem
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN envsubst '$DOMAIN_NAME' < /etc/nginx/conf.d/default.conf > /tmp/default.conf && mv /tmp/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
