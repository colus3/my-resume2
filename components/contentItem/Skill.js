/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';
import { Row, Col, Progress } from 'reactstrap';

import ContentItem from '../ContentItem';

const Skill = ({ content }) => {

  if ( _.isEmpty(c.items) ) {
    return (<ContentItem />);
  }

  const contentItems = createItems(content);
  // switch ( props.data.content_detail_type ) {
  // case ContentDetailType.TYPE1: contentItems = createDetailType1Items(props.data); break;
  // case ContentDetailType.TYPE2: contentItems = createDetailType2Items(props.data); break;
  // }

  return <ContentItem title={content.name} items={contentItems} />;
};

const createSkills = (skill, i, isPrint) => {

  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  // const level = { width: `${skill.label}%` };
  const progressVisible = `${isPrint ? 'd-print-inline' : 'd-print-none'}`;
  const progressBarColor = `${isPrint ? 'gray' : `${color[i % color.length]}`}`;
  return (
      <div className={progressVisible} key={i}>
        <Progress animated color={progressBarColor} value={skill.point}>
        </Progress>
        <span className="progress-type">{skill.tagName}</span>
        <span className="progress-completed">{skill.point} %</span>
      </div>
  );
};

// const createDetailType1Items = data => {
//
//   const skills = data.contents.slice(0, 10).map((skill, i) => createSkills(skill, i, false));
//   const skillsPrint = data.contents.slice(0, 10).map((skill, i) => createSkills(skill, i, true));
//
//   return [skills, skillsPrint];
// };

const createItems = content => {

  const skills = content.items.slice(0, 10).map((skill, i) => createSkills(skill, i, false));
  const skillsPrint = content.items.slice(0, 10).map((skill, i) => createSkills(skill, i, true));

  const createTag = (e) => (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        {e.length % 2 === 0 ? e.slice(0, e.length / 2) : e.slice(0, e.length / 2 + 1)}
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        {e.length % 2 === 0 ? e.slice(e.length / 2) : e.slice(e.length / 2 + 1)}
      </Col>
    </Row>
  );

  return [createTag(skills), createTag(skillsPrint)];
};

Skill.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
  }),
};

export default Skill;