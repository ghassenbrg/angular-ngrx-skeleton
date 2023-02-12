#######################################
# Stage 1: Build Angular application  #
#######################################
# base image
FROM node:12.3-alpine AS build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

# install and cache app dependencies
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# start app
CMD ng serve --host 0.0.0.0