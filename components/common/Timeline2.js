/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';

const Timeline2 = ({ items, useYearLabel }) => {

  const timelines = createTimeLine(items, useYearLabel);

  if ( useYearLabel ) {
    timelines.push((
      <span key="timeline-labelEnd" className="timeline-label">
        <Badge color="secondary">End</Badge>
      </span>));
  }

  return (
    <div className="timeline">
      {timelines}
    </div>
  );
};

function createTimeLine( items, useYearLabel ) {
  
  let yearLebel = '';
  return items.reduce((list, item, index) => {
    
    let label;
    if ( useYearLabel && yearLebel !== moment(item.startDt).format('YYYY') ) {
      yearLebel = moment(item.startDt).format('YYYY');
      label = (
        <span key={`timeline-label${index}`} className="timeline-label">
          <Badge color="secondary">{yearLebel}</Badge>
        </span>
      );
    }
    
    const item2 = (
      <div key={item.id} className="timeline-item">
        <div className="timeline-point timeline-point-blank timeline-point-success" />
        <div className="timeline-event">
          <div className="timeline-heading">
            <h5 className="timeline-title">
              <span name="title">{moment(item.startDt).format('YYYY-MM')} ~ {moment(item.endDt).format('YYYY-MM')} {item.title} </span>
            </h5>
          </div>
          <div className="timeline-body timeline2">
            {_.isEmpty(item.contents) ? '' : <ReactMarkdown source={item.contents}/>}
            {_.isEmpty(item.tagNames) ? '' : item.tagNames.map((tagName, i) => <Badge key={`b-${i}`} color="secondary">{tagName}</Badge>)}
          </div>
        </div>
      </div>
    );
    
    return list.concat([label, item2]);
  }, []);
}

Timeline2.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string,
    startDt: PropTypes.string,
    endDt: PropTypes.string,
    tagNames: PropTypes.array,
  })),
  useYearLabel: PropTypes.bool,
};

export default Timeline2;