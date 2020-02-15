import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Badge } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Timeline3 = ({ items }) => {

  return items.map( (item, i) => {
    const period = `(${moment(item.startDt).format('YYYY-MM')} ~ ${moment(item.endDt).format('YYYY-MM')})`;
    const badges = item.badges.map((badge, index) => (<Badge key={`b-${index}`} color="secondary">{badge}</Badge>));
    return (
      <div className="timeline3" key={i}>
        <h4>{item.title} {period} {item.onInfo ? item.onInfo : ''}</h4>
        <ReactMarkdown source={item.contents}/>
        {badges}
      </div>
    );
  });
};

Timeline3.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    startDt: PropTypes.string,
    endDt: PropTypes.string,
    contents: PropTypes.string,
    badges: PropTypes.array,
    onInfo: PropTypes.func,
  })),
};

export default Timeline3;