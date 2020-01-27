/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';

const propTypes = {
  datas: React.PropTypes.array,
  useYearLabel: React.PropTypes.bool
};

class TimeLine2 extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    const timeLines = createTimeLine( this.props.datas, this.props.useYearLabel );
  
    if ( this.props.useYearLabel ) {
      timeLines.push((
        <span key="timeline-labelEnd" className="timeline-label">
          <span className="label label-primary">End</span>
        </span>));
    }
  
    return (
      <div className="timeline">
        {timeLines}
      </div>
    );
  }
}

function createTimeLine( datas, useYearLabel ) {
  
  let yearLebel = '';
  return datas.reduce((list, data, index) => {
    
    let label;
    if ( useYearLabel && yearLebel !== data.startDate.substr(0, 4) ) {
      yearLebel = data.startDate.substr(0, 4);
      label = (
        <span key={`timeline-label${index}`} className="timeline-label">
            <span className="label label-primary">{yearLebel}</span>
          </span>
      );
    }
    
    const item = (
      <div key={data.id} className="timeline-item">
        <div className="timeline-point timeline-point-blank timeline-point-success"></div>
        <div className="timeline-event">
          <div className="timeline-heading">
            <h4 className="timeline-title">
              <span name="title">{data.startDate} ~ {data.endDate} <strong>{data.title}</strong> </span>
            </h4>
          </div>
          <div className="timeline-body">
            <p>{data.desc === '' ? '' : data.desc}</p>
            <p>
              {data.badges === [] ? '' :
                data.badges.map(
                  (badge, i) => (
                    <span key={i} className="label label-primary" style={{'display': 'inline-block', 'marginRight': '5px', 'color': '#fff'}}>
                      {badge}
                    </span>
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

TimeLine2.propTypes = propTypes;

export default TimeLine2;