/**
 * Created by colus on 2017. 4. 29..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Row, Col, Button, Container } from 'reactstrap';
import Name from "../Name";
import Title from "../Title";
import UserInfo from "./UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TitleContent = ({ user, shortIntro, onDownload }) => (
  <Jumbotron fluid>
    <Container fluid>
      <Row>
        <Col xs="12" sm="8" md="5" style={{ marginBottom: '25px' }}>
          <Name>{user.username}</Name>
          <Title>{shortIntro}</Title>
          <Button outline color="light" onClick={onDownload}>Download PDF</Button>
        </Col>
        <Col className="d-none d-md-block" md="2">
          <p>
            <img src="/my-image.png"
                 className="rounded-circle mx-auto d-block" alt="Responsive image"
                 style={{ height: '150px', backgroundColor: 'rgba(155, 155, 155, 0.5)' }} />
          </p>
        </Col>
        <Col xs="12" sm="4" md="5">
          <UserInfo info={user}/>
        </Col>
      </Row>
    </Container>
    <h6 className="d-none d-lg-inline-block">
      <div className="icon">
        <FontAwesomeIcon icon={faChevronRight} />
        This page is designed using Node.js, React.js, Redux, Next.js, MariaDB, Bootstrap, Phantom.js, Docker, AWS.
      </div>
    </h6>
  </Jumbotron>
);

TitleContent.propTypes = {
  user: PropTypes.object,
  shortIntro: PropTypes.string,
  onDownload: PropTypes.func,
};

export default TitleContent;