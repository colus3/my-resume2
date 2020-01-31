/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Badge } from 'reactstrap';

const TimeLine = ({ data, usePeriod }) => {
    
  const style={ 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' };

  const timeLines = data.map( item => {

    let period = '';
    if ( usePeriod ) {
      // if ( item.period.year > 0 && item.period.month > 0 ) {
      //   period = `${item.period.year} ${item.period.year > 1 ? 'years' : 'year'} ${item.period.month} ${item.period.month > 1 ? 'months' : 'month'}`;
      // } else if ( item.period.year > 0 && item.period.month <= 0 ) {
      //   period = `${item.period.year} ${item.period.year > 1 ? 'years' : 'year'}`;
      // } else if ( item.period.year <= 0 && item.period.month > 0 ) {
      //   period = `${item.period.month} ${item.period.month > 1 ? 'months' : 'month'}`;
      // }
    }

    const timeLineHead = (
      <div className="timeline-heading">
        <h4 className="timeline-title">
          <span name="title">{item.startDt} ~ {item.endDt} <strong>{item.title}</strong></span>
        </h4>
      </div>
    );

    const timeLineBody = (
      <div className="timeline-body">
        <p>{item.contents === '' ? '' : (<ReactMarkdown source={item.contents}/>)}</p>
        <p>
          {item.badges === [] ? '' : item.badges.map( (badge, i) => ( <Badge color="secondary" style={style}>{badge}</Badge> ) )}
        </p>
      </div>
    );

    const timeLineFooter = (
      <div className="timeline-footer">
        <p className="text-right">{period}</p>
      </div>
    );

    return (
      <div key={item.id} className="timeline-item">
        <div className="timeline-point timeline-point-blank" />
        <div className="timeline-event">
          {timeLineHead}
          {timeLineBody}
          {timeLineFooter}
        </div>
      </div>
    );
  });

  return (
    <div className="timeline timeline-single-column">
      {timeLines}
    </div>
  );
};

TimeLine.propTypes = {
  data: PropTypes.array,
  usePeriod: PropTypes.bool
};

export default TimeLine;