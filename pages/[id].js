import React from 'react';
import Resume from '../components/Resume';
import { LOAD_RESUME_REQUEST } from '../reducers/resume';
import { useSelector } from 'react-redux';

const MyResume = () => {
  const resume = useSelector((state) => state.resume);
  return <Resume resume={resume} />;
};

MyResume.getInitialProps = async (ctx) => {
  const directAccessId = ctx.query.id;

  ctx.store.dispatch({
    type: LOAD_RESUME_REQUEST,
    id: directAccessId,
  });
};

export default MyResume;