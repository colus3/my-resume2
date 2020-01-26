import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ children }) => (
  <>
    <div className="d-sm-none d-md-block name"><h1 className="display-4">{children}</h1></div>
    <div className="d-none d-sm-block d-md-none name"><h2>{children}</h2></div>
  </>
);

export default Name;