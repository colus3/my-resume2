/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ContentItem = ({ title, items }) => {
    const contentTitle = _.isEmpty(title) ? '' : (<div className='item-header'><h2>{title}</h2></div>);
    return (
        <div key={title}>
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