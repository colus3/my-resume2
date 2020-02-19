import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Badge } from "reactstrap";
import _ from 'lodash';

const Timeline3 = ({ items }) => {

  return items.map( (item, i) => {
    const period = `(${moment(item.startDt).format('YYYY-MM')} ~ ${moment(item.endDt).format('YYYY-MM')})`;
    const badges = _.isEmpty(item.tagNames) ? [] : item.tagNames.map((badge, index) => (<Badge key={`b-${index}`} color="secondary">{badge}</Badge>));
    return (
      <div className="timeline3" key={i}>
        <h5>{item.title} {period} {item.info}</h5>
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
    tagNames: PropTypes.array,
    info: PropTypes.object,
  })),
};

export default Timeline3;