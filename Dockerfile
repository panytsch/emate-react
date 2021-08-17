# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN yarn cache clean && yarn --update-checksums
COPY . ./
EXPOSE 3000
CMD ["yarn", "start"]
