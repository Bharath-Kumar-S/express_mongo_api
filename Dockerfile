FROM node:18.7.0-alpine

WORKDIR .
COPY package*.json /
RUN npm ci
COPY . /
RUN npm run build
CMD ["npm", "start"]