import React from 'react';
import PropTypes from 'prop-types';
import { QRCode } from "react-qrcode";
import Text from "../Text";
import { faEnvelope, faHome, faLink, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const UserInfo = ({ info }) => (
  <>
    <h5 className="text-right">
      <Text icon={faUser} iconRight>{info.birthDate}</Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faPhone} iconRight><a className="text-white" href={`tel:${info.phone}`}>{info.phone}</a></Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faEnvelope} iconRight><a className="text-white" href={`mailto:${info.email}`}>{info.email}</a></Text>
    </h5>
    <h5 className="text-right">
      <Text icon={faHome} iconRight>{info.address}</Text>
    </h5>
    <h5 className="text-right">
      <Text><a href="http://localhost:3000"><QRCode value="http://localhost:3000" scale={2.2} color={{ light: '#ffffff7f' }}/></a></Text>
    </h5>
  </>
);

UserInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    birthDate: PropTypes.string,
    shortUrl: PropTypes.string,
  }),
};

export default UserInfo;