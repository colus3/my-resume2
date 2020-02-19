import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from "reactstrap";
import _ from 'lodash';
import TitleContent from "./items/TitleContent";
import Contents from "./Contents";
import Layout from "./Layout";

const Resume = ({ resume }) => {
  const { user, resumeContents, shortIntro, id } = resume;
  let leftContents = [];
  let rightContents = [];
  let bottomContents = [];
  if (Array.isArray(resumeContents)) {
    leftContents = resumeContents.filter(e => e.position === 'LEFT');
    rightContents = resumeContents.filter(e => e.position === 'RIGHT');
    bottomContents = resumeContents.filter(e => e.position === 'BOTTOM');
  }
  const username = (_.isEmpty(user) || _.isEmpty(user.username)) ? '' : user.username;

  const onDownload = useCallback(() => {
    location.href=`/api/pdf/${id}?name=${username}`;
  }, []);

  return (
    <Layout title={`${username}'s Resume`}>
      {_.isEmpty(user) ? '' : <TitleContent user={user} resumeId={id} shortIntro={shortIntro} onDownload={onDownload} />}
      <Container>
        <Row>
          <Col sm="12" md="4">
            <Contents key="left" contents={leftContents}/>
          </Col>
          <Col sm="12" md="8">
            <Contents key="right" contents={rightContents}/>
          </Col>
        </Row>
      </Container>
      <div className="page-break" />
      <Container>
        <Contents key="bottom" contents={bottomContents} />
      </Container>
    </Layout>
  );
};

Resume.propTypes = {
  resume: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
    shortIntro: PropTypes.string,
    resumeContents: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.string,
    })),
  }),
};

export default Resume;