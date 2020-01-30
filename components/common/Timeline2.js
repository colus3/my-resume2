/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

const TimeLine2 = ({ data, useYearLabel }) => {

  const timeLines = createTimeLine( data, useYearLabel );

  if ( this.props.useYearLabel ) {
    timeLines.push((
      <span key="timeline-labelEnd" className="timeline-label">
        <Badge color="primary">End</Badge>
      </span>));
  }

  return (
    <div className="timeline">
      {timeLines}
    </div>
  );
};

function createTimeLine( datas, useYearLabel ) {
  
  let yearLebel = '';
  return datas.reduce((list, data, index) => {
    
    let label;
    if ( useYearLabel && yearLebel !== data.startDt.substr(0, 4) ) {
      yearLebel = data.startDt.substr(0, 4);
      label = (
        <span key={`timeline-label${index}`} className="timeline-label">
          <Badge color="primary">{yearLebel}</Badge>
        </span>
      );
    }
    
    const item = (
      <div key={data.id} className="timeline-item">
        <div className="timeline-point timeline-point-blank timeline-point-success" />
        <div className="timeline-event">
          <div className="timeline-heading">
            <h4 className="timeline-title">
              <span name="title">{data.startDt} ~ {data.endDt} <strong>{data.title}</strong> </span>
            </h4>
          </div>
          <div className="timeline-body">
            <p>{data.contents === '' ? '' : data.contents}</p>
            <p>
              {data.badges === [] ? '' :
                data.badges.map(
                  (badge, i) => (
                    <Badge color="primary" style={{'display': 'inline-block', 'marginRight': '5px', 'color': '#fff'}}>
                      {badge}
                    </Badge>
                  )
                )}
            </p>
          </div>
        </div>
      </div>
    );
    
    return list.concat([label, item]);
  }, []);
}

TimeLine2.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    contents: PropTypes.string,
    startDt: PropTypes.string,
    endDt: PropTypes.string,
    badges: PropTypes.array,
  })),
  useYearLabel: PropTypes.bool,
};

export default TimeLine2;