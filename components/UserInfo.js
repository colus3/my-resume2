import React from 'react';
import PropTypes from 'prop-types';
import Text from "./Text";
import { faEnvelope, faHome, faLink, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const UserInfo = ({ info }) => {
  const phone = `tel:${info.phone}`;
  const email = `mailto:${info.email}`;
  return (
    <>
      <h5 className="text-right">
        <Text icon={faUser} iconRight>{info.birthDate}</Text>
      </h5>
      <h5 className="text-right">
        <Text icon={faPhone} iconRight><a className="text-white" href={phone}>{info.phone}</a></Text>
      </h5>
      <h5 className="text-right">
        <Text icon={faEnvelope} iconRight><a className="text-white" href={email}>{info.email}</a></Text>
      </h5>
      <h5 className="text-right">
        <Text icon={faHome} iconRight>{info.address}</Text>
      </h5>
      <h5 className="text-right">
        <Text icon={faLink} iconRight><a className="text-white" href={info.shortUrl}>{info.shortUrl}</a></Text>
      </h5>
    </>
  );
};

UserInfo.propTypes = {
  info: PropTypes.object,
};

export default UserInfo;