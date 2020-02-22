const withCSS = require('@zeit/next-css');

const dotEnv = require('dotenv');
dotEnv.config();

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    ADMIN_URL: process.env.ADMIN_URL,
    RESUME_URL: process.env.RESUME_URL,
  }
});
