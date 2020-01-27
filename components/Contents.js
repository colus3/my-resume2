import React from 'react';
import PropTypes from 'prop-types';
import Profile from './contentItem/Profile';
import Education from "./contentItem/Education";
import Interest from "./contentItem/Interest";
import Certification from "./contentItem/Certification";
import Skill from "./contentItem/Skill";
import WorkExperience from "./contentItem/WorkExp";

const Contents = ({ contents }) => {

  // console.log('contents ', contents);
  const items = contents.map((content, index) => {
    console.log('content : ', content);
    switch (content.type) {
      case 'PROFILE': return <Profile key={index} content={content} />;
      case 'EDUCATION': return <Education key={index} content={content} />;
      case 'INTEREST': return <Interest key={index} content={content} />;
      case 'CERTIFICATION': return <Certification key={index} content={content} />;
      case 'SKILL': return <Skill key={index} content={content} />;
      // case 'WORK_EXPERIENCE': return <WorkExperience key={index} content={content} />;
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