import React from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../public/css/my-resume2.css';

import Title from './Title';
import Name from './Name';
import UserInfo from "./UserInfo";
import LeftContents from "./LeftContents";
import RightContents from "./RightContents";

const Layout = ({ resume }) => {
  const onDownload = () => {
    alert('다운로드 준비중...');
  };

  const { user } = resume;

  // const userInfo = {
  //   name: 'Donghwan Lee',
  //   phone: '+82-10-2041-9909',
  //   email: 'colus4@gmail.com',
  //   birthDate: '1982-01-26',
  //   address: '경기 고양시 일산서구 주엽동',
  //   shortUrl: 'http://tinyurl.com/hq5wn7p',
  // };

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col xs="12" sm="8" md="5" style={{ marginBottom: '25px' }}>
              <Name>{user.username}</Name>
              <Title>프로그래밍을 좋아하는 개발자</Title>
              <Button outline color="light" onClick={onDownload}>Download PDF</Button>
            </Col>
            <Col className="d-none d-md-block" md="2">
              <p>
                <img src="/my-image.png"
                     className="rounded-circle mx-auto d-block" alt="Responsive image"
                     style={{height: '150px'}} />
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
      <div>
        <Row>
          <Col md="12" lg="6">
            <LeftContents/>
          </Col>
          <Col md="12" lg="6">
            <RightContents/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Layout;