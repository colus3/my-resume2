/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import PropTypes from 'prop-types';
import MarkDown from 'react-markdown';
import _ from 'lodash';

import ContentItem from '../ContentItem';

const Education = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  const educations = content.items.map( education => {
    return `* ${education.startDt} ~ ${education.endDt} ${education.contents}\n`;
  }).join(' ');

  const contentItems = [];
  contentItems.push(<MarkDown key={content.type} source={educations} />);
  return <ContentItem title={content.name} items={contentItems} />;
};

Education.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        startDt: PropTypes.string,
        endDt: PropTypes.string,
        contents: PropTypes.string,
    })),
  }),
};

export default Education;