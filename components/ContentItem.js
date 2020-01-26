/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Title from './Title';

const ContentItem = (props) => {

  switch( props.resumeUIType ) {
  case 'bootstrap':
    const title = _.isEmpty(props.title) ? '' : (<Title>{props.title}</Title>);
    return (
        <div key={props.title}>
          {title}
          {props.contentItems}
        </div>
    );
  default: return <div>.</div>;
  }
};

ContentItem.propTypes = {
  resumeUIType: PropTypes.string,
  title: PropTypes.string,
  contentItems: PropTypes.array
};
ContentItem.defaultProps = { resumeUIType: '', title: '', contentItems: [] };

export default ContentItem;