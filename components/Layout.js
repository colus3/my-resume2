import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'reactstrap';
import Head from 'next/head';
import '../public/css/my-resume2.css';
import axios from "axios";
import Text from "./Text";

const Layout = ({ title, children }) => {
  const [showButton, setShowButton] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    const checkTopPosition = e => {
      e.clientY < 30 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("mousemove", checkTopPosition);

    checkSession().then(r => {
      setLoggedIn(r.loggedIn);
      setUsername(r.username);
    });
  }, []);

  const checkSession = useCallback(async () => {
    const getMe = `http://local.programmeris.me:8080/api/v2/auth/me`;

    const result = await axios.get(getMe, { withCredentials: true });
    if (result.data.code === 1000) {
      return {
        loggedIn: true,
        username: result.data.data.user.username,
      };
    }
    return {
      loggedIn: false,
      username: '',
    }
  }, []);

  const onMoveAdmin = useCallback(() => {
    location.href="http://localhost:5000";
  }, []);

  const onLogout = useCallback( async () => {
    const postLogout = `http://local.programmeris.me:8080/api/v2/auth/logout`;
    const result = await axios.post(postLogout, {}, { withCredentials: true });
    if (result.data.code === 1000) {
      window.location.reload();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{title ? title : 'Resume'}</title>
      </Head>
      {showButton &&
      <Container fluid className="top-container">
        { loggedIn ?
          <div style={{ height: '30px' }}>
          <Button className="float-right login" outline color="light" size="sm" onClick={onLogout}>Logout</Button>
          <Button className="float-right login" outline color="light" size="sm" onClick={onMoveAdmin}>My Admin</Button>
          <span className="login-text">
            <h6 className="float-right text-light">
                <Text>{`Welcome ${username}`}</Text>
            </h6>
          </span>
          </div>
          :
          <Button className="float-right login" outline color="light" size="sm" onClick={onMoveAdmin}>Login</Button>
        }
      </Container>
      }
      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
};

export default Layout;