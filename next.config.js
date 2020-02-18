const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    API_URL: 'http://api.docker.programmeris.me',
    ADMIN_URL: 'http://admin.docker.programmeris.me',
  }
});
