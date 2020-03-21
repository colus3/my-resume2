import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from 'reactstrap';
import '../public/css/my-resume2.css';
import Text from './Text';
import { LOG_OUT_REQUEST } from "../reducers/session";

const Layout = ({ meta, children }) => {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');
  const { loggedIn, user } = useSelector(state => state.session);
  useEffect(() => {
    const checkTopPosition = e => {
      e.clientY < 30 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("mousemove", checkTopPosition);

    // checkSession().then(r => {
    //   setLoggedIn(r.loggedIn);
    //   setUsername(r.username);
    // });
  }, []);

  // const checkSession = useCallback(async () => {
  //   const getMe = `${process.env.API_URL}/api/v2/auth/me`;
  //   const result = await axios.get(getMe, { withCredentials: true });
  //   if (result.data.code === 1000) {
  //     return {
  //       loggedIn: true,
  //       username: result.data.data.user.username,
  //     };
  //   }
  //   return {
  //     loggedIn: false,
  //     username: '',
  //   }
  // }, []);

  const onMoveAdmin = useCallback(() => {
    location.href=`${process.env.ADMIN_URL}`;
  }, []);

  const onLogout = useCallback( async () => {
    // const postLogout = `${process.env.API_URL}/api/v2/auth/logout`;
    // const result = await axios.post(postLogout, {}, { withCredentials: true });
    // if (result.data.code === 1000) {
    //   window.location.reload();
    // }
    dispatch({
      type: LOG_OUT_REQUEST,
    })
  }, []);

  return (
    <div>
      {meta}
      {showButton &&
      <Container fluid className="top-container">
        { loggedIn ?
          <div style={{ height: '30px' }}>
          <Button className="float-right login" outline color="light" size="sm" onClick={onLogout}>Logout</Button>
          <Button className="float-right login" outline color="light" size="sm" onClick={onMoveAdmin}>My Admin</Button>
          <span className="login-text">
            <h6 className="float-right text-light">
                <Text>{`Welcome ${user & user.username}`}</Text>
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
  meta: PropTypes.object,
  title: PropTypes.string,
};

export default Layout;