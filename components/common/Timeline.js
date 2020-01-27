/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';

class TimeLine extends React.Component {
  
  constructor() {
    super();
  }
  
  render() {
    
    const style={ 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' };
    
    const timeLines = this.props.datas.map( data => {
  
      let period = '';
      if ( this.props.usePeriod ) {
        if ( data.period.year > 0 && data.period.month > 0 ) {
          period = `${data.period.year} ${data.period.year > 1 ? 'years' : 'year'} ${data.period.month} ${data.period.month > 1 ? 'months' : 'month'}`;
        } else if ( data.period.year > 0 && data.period.month <= 0 ) {
          period = `${data.period.year} ${data.period.year > 1 ? 'years' : 'year'}`;
        } else if ( data.period.year <= 0 && data.period.month > 0 ) {
          period = `${data.period.month} ${data.period.month > 1 ? 'months' : 'month'}`;
        }
      }
          
      const timeLineHead = (
        <div className="timeline-heading">
          <h4 className="timeline-title">
            <span name="title">{data.startDate} ~ {data.endDate} <strong>{data.title}</strong></span>
          </h4>
        </div>
      );
      
      const timeLineBody = (
        <div className="timeline-body">
          <p>{data.desc === '' ? '' : (<ReactMarkdown source={data.desc}/>)}</p>
          <p>
            {data.badges === [] ? '' : data.badges.map( (badge, i) => ( <span key={i} className="label label-primary" style={style}>{badge}</span> ) )}
          </p>
        </div>
      );
      
      const timeLineFooter = (
        <div className="timeline-footer">
          <p className="text-right">{period}</p>
        </div>
      );
      
      return (
        <div key={data.id} className="timeline-item">
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
  }
}

TimeLine.propTypes = {
  datas: PropTypes.array,
  usePeriod: PropTypes.bool
};

export default TimeLine;