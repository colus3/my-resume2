import React from 'react';
import axios from 'axios';
import Layout from "../components/Layout";

const Index = ({ children, resume }) => {
  return (
    <Layout resume={resume}>
      {children}
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const directAccessId = '69586509-155a-483f-a9b0-71dfa9dcce28';
  const result = await axios.get(`http://api:8080/api/v2/resumes/id/${directAccessId}`, {});
  if (result.data.code === 1000) {
    return {resume: result.data.data};
  }
  return {resume: {}};
};

// Index.propTypes = {
//   resume: PropTypes.shape({
//
//   })
// };

export default Index;