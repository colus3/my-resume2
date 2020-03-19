const withCSS = require('@zeit/next-css');

const dotEnv = require('dotenv');
dotEnv.config();

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    ADMIN_URL: process.env.ADMIN_URL,
    RESUME_URL: process.env.RESUME_URL,
    AWS_S3_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  }
});
