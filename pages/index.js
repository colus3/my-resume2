import React from 'react';
import Layout from "../components/Layout";

const Index = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

Index.getInitialProps = () => {
  // 여기에 이력서 정보 조회
};

export default Index;