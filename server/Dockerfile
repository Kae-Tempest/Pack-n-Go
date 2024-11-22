FROM node:20-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn
ENV DATABASE_URL "postgresql://postgres:root@db:5432/packngo"
CMD ["yarn", "start:dev"]