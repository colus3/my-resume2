FROM node:12.14.1-alpine

WORKDIR /app

# Installing dependencies
COPY package.json ./
RUN npm install

# Copying source files
COPY components/ ./components/
COPY pages/ ./pages/
COPY public/ ./public/
COPY next.config.js ./

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]