/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import ContentItem from '../ContentItem';
import Timeline2 from '../common/Timeline2';

const ProjectExperience = ({ className, content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  // let datas = props.data.contents.map((project, i) => {
  //   return new TimeLineData(
  //     i,
  //     new Date(project.startDt),
  //     new Date(project.endDt),
  //     project.title,
  //     `role : ${project.contents}`,
  //     project.label ? new Object(project.label).toString().split(',') : []
  //   );
  // });
  // const contentItems = [];
  // contentItems.push(<TimeLine items={datas} useYearLabel/>);
  // return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);

  const contentItems = createItems(content.items);

  return <ContentItem className={className} title={content.name} items={contentItems}/>;
};

const createItems = (items) => {
  const projects = items.map((projectExp, i) => ({
    id: i,
    startDt: projectExp.startDt,
    endDt: projectExp.endDt,
    title: projectExp.title,
    contents: projectExp.contents,
    tagNames: projectExp.tagNames,
  }));

  const contentItems = [];
  contentItems.push(<Timeline2 key="projectExp" items={projects} useYearLabel />);

  return contentItems;
};

ProjectExperience.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      childItems: PropTypes.array,
    })),
  }),
};

export default ProjectExperience;