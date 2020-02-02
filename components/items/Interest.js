/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TagCloud } from 'react-tagcloud';
import _ from 'lodash';

import ContentItem from '../ContentItem';

const Interest = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem/>);
  }

  const contentItems = createItems(content);

  return (<ContentItem key={content.types} title={content.name} items={contentItems}/>);
};

const createItems = content => {

  const interests = content.items.map((interest, idx) => {
    return {value: interest.tagNames[0], count: (100 - idx * 2)};
  });

  const contentItems = [];
  contentItems.push(
      <TagCloud
        key={content.type}
        minSize={5}
        maxSize={25}
        tags={interests}
        onClick={tag => alert(`'${tag.value}' was selected!`)}
      />
  );

  return contentItems;
};

Interest.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    items: PropTypes.array,
  }),
};

export default Interest;