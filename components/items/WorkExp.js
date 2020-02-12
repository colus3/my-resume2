/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ContentItem from '../ContentItem';
import TimeLine3 from "../common/Timeline3";

const WorkExperience = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  const contentItems = createItems(content.items);

  return <ContentItem title={content.name} items={contentItems}/>;
};

const createItems = (items) => {
  const works = items.map((workEx, i) => ({
    id: i,
    startDt: workEx.startDt,
    endDt: workEx.endDt,
    title: workEx.title,
    contents: workEx.contents,
    badges: workEx.tagNames,
  }));

  const contentItems = [];
  // contentItems.push(<TimeLine data={works} usePeriod />);
  contentItems.push(<TimeLine3 key="workExp" data={works} />);

  return contentItems;
};

WorkExperience.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
  }),
};

export default WorkExperience;