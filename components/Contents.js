import React from 'react';
import PropTypes from 'prop-types';
import Profile from './items/Profile';
import Education from "./items/Education";
import Interest from "./items/Interest";
import Certification from "./items/Certification";
import Skill from "./items/Skill";
import WorkExperience from "./items/WorkExp";
import ProjectExperience from "./items/ProjectExp";

const Contents = ({ contents }) => {

  const items = contents.map((content, index) => {
    switch (content.type) {
      case 'PROFILE': return <Profile key={index} content={content} />;
      case 'EDUCATION': return <Education key={index} content={content} />;
      case 'INTEREST': return <Interest key={index} content={content} />;
      case 'CERTIFICATION': return <Certification key={index} content={content} />;
      case 'SKILL': return <Skill key={index} content={content} />;
      case 'WORK_EXPERIENCE': return <WorkExperience key={index} content={content} />;
      case 'PROJECT_EXPERIENCE': return <ProjectExperience className="d-none d-print-block" key={index} content={content} />;
      // case 'PROJECT_EXPERIENCE': return <ProjectExperience key={index} content={content} />;
    }
  });

  return (
    <>
      {items}
    </>
  );
};

Contents.propTypes = {
  contents: PropTypes.array,
};

export default Contents;