import React from 'react';
import axios from "axios";
import Resume from "../components/Resume";

const MyResume = ({ resume }) => (
  <Resume resume={resume} />
);

MyResume.getInitialProps = async (ctx) => {
  const directAccessId = ctx.query.id;
  const getResumeUrl = `http://api:8080/api/v2/resumes/id/${directAccessId}`;

  const result = await axios.get(getResumeUrl, {});
  if (result.data.code === 1000) {
    return {resume: result.data.data};
  }
  return {resume: {}};
};

export default MyResume;