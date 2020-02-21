const withCSS = require('@zeit/next-css');

require('dotenv').config();

module.exports = withCSS({
  env: {
    API_URL: 'http://api.myresume.kr:8080',
    ADMIN_URL: 'http://admin.myresume.kr',
    RESUME_URL: 'http://myresume.kr',
  }
});
