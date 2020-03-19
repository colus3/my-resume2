import React from 'react';
import axios from "axios";
import Resume from "../../components/Resume";

const defaultResume = ({ resume }) => (
  <Resume resume={resume} />
);

defaultResume.getInitialProps = async (ctx) => {

  const emailId = ctx.query.email;
  const getResumeUrl = `${process.env.API_URL}/api/v2/resumes/email/${emailId}/default`;

  const result = await axios.get(getResumeUrl, {});
  if (result.data.code === 1000) {
    return {resume: result.data.data};
  }
  return {resume: {}};
};

export default defaultResume;