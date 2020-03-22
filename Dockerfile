FROM node:12.14.1-alpine

WORKDIR /app

# Installs latest Chromium (77) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      font-noto \
      font-noto-cjk

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

## Add user so we don't need --no-sandbox.
#RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
#    && mkdir -p /home/pptruser/Downloads /app \
#    && chown -R pptruser:pptruser /home/pptruser \
#    && chown -R pptruser:pptruser /app
#
## Run everything after as non-privileged user.
#USER pptruser

# Installing dependencies
COPY package.json ./
RUN npm install

# Copying source files
COPY components/ ./components/
COPY pages/ ./pages/
COPY reducers/ ./reducers/
COPY sagas/ ./sagas/
COPY public/ ./public/
COPY next.config.js ./
COPY .env ./

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]