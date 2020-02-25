/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ContentItem = ({ className, title, items }) => {
  const contentTitle = _.isEmpty(title) ? '' : (<div className={`${_.isEmpty(className) ? '' : className} item-header content-title`}><h3>{title}</h3></div>);
  return (
      <div className={className} key={title}>
        {contentTitle}
        {items}
      </div>
  );
};

ContentItem.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default ContentItem;