# base image
FROM node:alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# start app
CMD ["npm", "start"]