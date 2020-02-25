/**
 * Created by colus on 2017. 4. 29..
 */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Random } from 'react-animated-text';
import _ from 'lodash';
import Name from '../Name';
import Title from '../Title';
import UserInfo from './UserInfo';
import Text from '../Text';

const TitleContent = ({ user, shortIntro, resumeId, onDownload }) => {
  const [visibleText, setVisibleText] = useState(false);
  const [pause, setPause] = useState(true);
  const onTogglePause = useCallback(() => {
    setVisibleText(true);
    setPause(!pause);
  }, [pause, visibleText]);
  return (
    <Jumbotron fluid>
      <Container fluid>
        <Row>
          <Col xs="12" sm="8" md="5" style={{ marginBottom: '25px' }}>
            <Name>{user.username}</Name>
            <Title>{shortIntro}</Title>
            <Button className="d-print-none" outline color="light" onClick={onDownload}>Download PDF</Button>
          </Col>
          <Col className="d-none d-md-block" md="2">
            <p>
              <img src={_.isEmpty(user.image) ? '/img/my-image.png' : user.image } className="rounded-circle mx-auto d-block my-image" alt="Responsive image"/>
            </p>
          </Col>
          <Col xs="12" sm="4" md="5">
            <UserInfo user={user} resumeId={resumeId}/>
          </Col>
        </Row>
      </Container>
      <h6 className="d-none d-print-none d-lg-inline-block">
        <Text icon={faTerminal} iconLeft onClick={onTogglePause} style={{ cursor: 'pointer' }}>
          {
            visibleText ?
            <Random
              text={'This page is designed using Node.js, React.js, Redux, Next.js, MariaDB, Bootstrap, Puppeteer, Docker, AWS.'}
              paused={pause}
              iterations={1}
              effect="verticalFadeIn"
              effectChange={2}
              effectDirection="up"
              style={{float: 'right'}}
            />
            : ''
          }
        </Text>
      </h6>
      <h6 className="d-none d-print-block">
        <Text icon={faTerminal} iconLeft>
          This page is designed using Node.js, React.js, Redux, Next.js, MariaDB, Bootstrap, Puppeteer, Docker, AWS.
        </Text>
      </h6>
    </Jumbotron>
  );
};

TitleContent.propTypes = {
  user: PropTypes.object,
  shortIntro: PropTypes.string,
  resumeId: PropTypes.string,
  onDownload: PropTypes.func,
};

export default TitleContent;