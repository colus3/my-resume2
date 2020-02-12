import React from 'react';
import PropTypes from 'prop-types';
import { QRCode } from "react-qrcode";
import Text from "../Text";
import { faEnvelope, faHome, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const UserInfo = ({ user }) => (
  <>
    <h5 className="text-right">
      <Text icon={faUser} iconRight>{user.birthDate}</Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faPhone} iconRight><a href={`tel:${user.phone}`}>{user.phone}</a></Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faEnvelope} iconRight><a href={`mailto:${user.email}`}>{user.email}</a></Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faHome} iconRight>{user.address}</Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faGithub} iconRight><a href={user.github} target="_blank">{user.github}</a></Text>
    </h5>
    <h5 className="text-right">
      <Text><a href="http://localhost:3000"><QRCode value="http://localhost:3000" scale={2.2} color={{ light: '#ffffff7f' }}/></a></Text>
    </h5>
  </>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    birthDate: PropTypes.string,
    github: PropTypes.string,
    shortUrl: PropTypes.string,
  }),
};

export default UserInfo;