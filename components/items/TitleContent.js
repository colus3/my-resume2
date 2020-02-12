/**
 * Created by colus on 2017. 4. 29..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';
import Name from "../Name";
import Title from "../Title";
import UserInfo from "./UserInfo";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Text from "../Text";

const TitleContent = ({ user, shortIntro, onDownload }) => (
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
            <img src="/my-image.png" className="rounded-circle mx-auto d-block my-image" alt="Responsive image"/>
          </p>
        </Col>
        <Col xs="12" sm="4" md="5">
          <UserInfo user={user}/>
        </Col>
      </Row>
    </Container>
    <h6 className="d-none d-lg-inline-block">
      <Text icon={faChevronRight} iconLeft>
        This page is designed using Node.js, React.js, Redux, Next.js, MariaDB, Bootstrap, Puppeteer, Docker, AWS.
      </Text>
    </h6>
  </Jumbotron>
);

TitleContent.propTypes = {
  user: PropTypes.object,
  shortIntro: PropTypes.string,
  onDownload: PropTypes.func,
};

export default TitleContent;