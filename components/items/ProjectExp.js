/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { ContentItem, TimeLine2 } from 'components';
import { TimeLineData } from 'domains';

const ProjectExperience = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem />);
  }

  let datas = props.data.contents.map((project, i) => {
    return new TimeLineData(
      i,
      new Date(project.startDt),
      new Date(project.endDt),
      project.title,
      `role : ${project.contents}`,
      project.label ? new Object(project.label).toString().split(',') : []
    );
  });
  const contentItems = [];
  contentItems.push(<TimeLine2 datas={datas} useYearLabel/>);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

export default ProjectExperience;