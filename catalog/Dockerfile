FROM node:20
WORKDIR '/app'
COPY package.json /app
RUN npm install
COPY dist/catalog /app
CMD node index.js