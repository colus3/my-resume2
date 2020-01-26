/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import _ from 'lodash';

import { Row, Col } from 'reactstrap';

import { ContentItem, ContentDetailType } from '../';

const Skill = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem />);
  }

  let contentItems;
  switch ( props.data.content_detail_type ) {
  case ContentDetailType.TYPE1: contentItems = createDetailType1Items(props.data); break;
  case ContentDetailType.TYPE2: contentItems = createDetailType2Items(props.data); break;
  }

  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

const createSkills = (skill, i, isPrint) => {

  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  const level = { width: `${skill.label}%` };
  const progressVisible = `progress ${isPrint ? 'visible-print' : 'hidden-print'}`;
  const progressBarColor = `progress-bar ${isPrint ?
      'progress-bar-gray' : `progress-bar-${color[i % color.length]} progress-bar-striped active`}`;
  return (
      <div className={progressVisible} key={i}>
        <div className={progressBarColor}
             role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
             style={level}>
        </div>
        <span className="progress-type">{skill.title}</span>
        <span className="progress-completed">{skill.label} %</span>
      </div>
  );
};

const createDetailType1Items = data => {

  const skills = data.contents.slice(0, 10).map((skill, i) => createSkills(skill, i, false));
  const skillsPrint = data.contents.slice(0, 10).map((skill, i) => createSkills(skill, i, true));

  return [skills, skillsPrint];
};

const createDetailType2Items = data => {

  const skills = data.contents.slice(0, 10).map((skill, i) => createSkills(skill, i, false));
  const skillsPrint = data.contents.slice(0, 10).map((skill, i) => createSkills(skill, i, true));

  const slicedSkills = (
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          {skills.length % 2 === 0 ? skills.slice(0, skills.length / 2) : skills.slice(0, skills.length / 2 + 1)}
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          {skills.length % 2 === 0 ? skills.slice(skills.length / 2) : skills.slice(skills.length / 2 + 1)}
        </Col>
      </Row>
  );

  const slicedSkillsPrint = (
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          {skillsPrint.length % 2 === 0 ? skillsPrint.slice(0, skillsPrint.length / 2) : skillsPrint.slice(0, skillsPrint.length / 2 + 1)}
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          {skillsPrint.length % 2 === 0 ? skillsPrint.slice(skillsPrint.length / 2) : skillsPrint.slice(skillsPrint.length / 2 + 1)}
        </Col>
      </Row>
  );

  return [slicedSkills, slicedSkillsPrint];
};

Skill.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Skill.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Skill;