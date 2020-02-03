import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Badge } from "reactstrap";

const Timeline3 = ({ data }) => {

  return data.map( (item, i) => {
    const date = `(${moment(item.startDt).format('YYYY-MM')} ~ ${moment(item.endDt).format('YYYY-MM')})`;
    const badges = item.badges.map((badge) => (<Badge color="secondary">{badge}</Badge>));
    return (
      <div className="timeline3" key={i}>
        <h4>{item.title} {date}</h4>
        <ReactMarkdown source={item.contents}/>
        {badges}
      </div>
    );
  });
};

Timeline3.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    startDt: PropTypes.string,
    endDt: PropTypes.string,
    contents: PropTypes.string,
    badges: PropTypes.array,
  })),
};

export default Timeline3;