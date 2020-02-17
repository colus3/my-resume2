/**
 * Created by Colus on 2016. 8. 20..
 */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ContentItem from '../ContentItem';
import TimeLine3 from "../common/Timeline3";
import ModalTimeline from "../common/ModalTimeline";

const WorkExperience = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  const onInfo = useCallback((item) => <ModalTimeline item={item}/>, []);

  const contentItems = createItems(content.items, onInfo);

  return <ContentItem title={content.name} items={contentItems}/>;
};

const createItems = (items, onInfo) => {
  const works = items.map((workEx, i) => ({
    id: i,
    startDt: workEx.startDt,
    endDt: workEx.endDt,
    title: workEx.title,
    contents: workEx.contents,
    tagNames: workEx.tagNames,
    info: onInfo(workEx),
  }));

  const contentItems = [];
  contentItems.push(<TimeLine3 key="workExp" items={works} />);

  return contentItems;
};

WorkExperience.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      childItems: PropTypes.array,
    })),
  }),
};

export default WorkExperience;