/**
 * Created by colus on 2016. 10. 1..
 */
import React from 'react';
import PropTypes from "prop-types";
import Markdown from 'react-markdown';

import _ from 'lodash';

import ContentItem from '../ContentItem';

const Certification = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  const certifications = content.items.map( certification => {
    return `* ${certification.startDt} ${certification.contents}\n`;
  }).join(' ');

  const contentItems = [];
  contentItems.push(<Markdown key={content.type} source={certifications} />);
  return (<ContentItem title={content.name} items={contentItems}/>);
};

Certification.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      startDt: PropTypes.string,
      contents: PropTypes.string,
    })),
  }),
};

export default Certification;