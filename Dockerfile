# build node package
FROM node:19-alpine as build
RUN adduser -D -g '' 1000
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --supress-warnings
COPY . ./
RUN npm run build

# run app on production environment
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
USER 1000
CMD ["nginx", "-g", "daemon off;"]
