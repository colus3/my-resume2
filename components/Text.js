import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Text = ({ children, icon, iconLeft, iconRight, onClick, style }) => (
  <div className={icon ? `icon-${iconLeft ? 'left' : 'right'}` : ''} onClick={onClick} style={style}>
    {iconLeft ? <FontAwesomeIcon icon={icon} /> : ''}
    {children}
    {iconRight ? <FontAwesomeIcon icon={icon} /> : ''}
  </div>
);

Text.propTypes = {
  icon: PropTypes.object,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Text;