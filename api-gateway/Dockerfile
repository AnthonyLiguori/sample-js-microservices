FROM node:20
WORKDIR '/app'
COPY package.json /app
RUN npm install
COPY dist/api-gateway /app
CMD node index.js