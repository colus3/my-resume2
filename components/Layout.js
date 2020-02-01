import React, { useCallback } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Head from 'next/head';
import '../public/css/my-resume2.css';
import Contents from "./Contents";
import TitleContent from "./items/TitleContent";

const Layout = ({ resume }) => {
  const onDownload = useCallback(() => {
    alert('다운로드 준비중...');
  }, []);

  const { user, resumeContents, shortIntro } = resume;
  console.log('resume : ', resume);
  const leftContents = resumeContents.filter(e => e.position === 'LEFT');
  console.log('leftContents : ', leftContents);
  const rightContents = resumeContents.filter(e => e.position === 'RIGHT');
  console.log('rightContents : ', rightContents);

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
      <Head>
        <title>{`${user.username}'s Resume`}</title>
      </Head>
      <TitleContent user={user} shortIntro={shortIntro} onDownload={onDownload} />
      <Container>
        <Row>
          <Col md="12" lg="4">
            <Contents key="left" contents={leftContents}/>
          </Col>
          <Col md="12" lg="8">
            <Contents key="right" contents={rightContents}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;