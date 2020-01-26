import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};
