/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';

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
      new Date(project.start_date),
      new Date(project.end_date),
      project.title,
      `role : ${project.contents}`,
      project.label ? new Object(project.label).toString().split(',') : []
    );
  });
  const contentItems = [];
  contentItems.push(<TimeLine2 datas={datas} useYearLabel/>);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

ProjectExperience.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
ProjectExperience.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default ProjectExperience;