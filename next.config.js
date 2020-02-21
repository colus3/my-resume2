const withCSS = require('@zeit/next-css');

require('dotenv').config();

module.exports = withCSS({
  env: {
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    ADMIN_URL: 'http://admin.myresume.kr',
    RESUME_URL: 'http://myresume.kr',
  }
});
