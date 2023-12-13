FROM node:20
WORKDIR '/app'
COPY package.json /app
RUN npm install
COPY dist/movies /app
CMD node index.js