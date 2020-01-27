/**
 * Created by colus on 2017. 3. 14..
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ContentItem = ({ title, items }) => {

  // switch( props.resumeUIType ) {
  // case 'bootstrap':
    const contentTitle = _.isEmpty(title) ? '' : (<h3>{title}</h3>);
    return (
        <div key={title}>
          {contentTitle}
          {items}
        </div>
    );
  // default: return <div>.</div>;
  // }
};

// ContentItem.propTypes = {
//   resumeUIType: PropTypes.string,
//   title: PropTypes.string,
//   contentItems: PropTypes.array
// };
// ContentItem.defaultProps = { resumeUIType: '', title: '', contentItems: [] };

export default ContentItem;