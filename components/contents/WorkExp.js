/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';

import { DateTime, DateFormat, DateLocale } from 'dateutils';

import { ContentItem, TimeLine, ContentDetailType } from '../../components';
import { TimeLineData } from '../../domains';

const WorkExperience = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem />);
  }

  let contentItems = [];
  switch ( props.data.content_detail_type ) {
  case ContentDetailType.TYPE1: contentItems = createDetailType1Items(props.data); break;
  case ContentDetailType.TYPE2: contentItems = createDetailType2Items(props.data); break;
  case ContentDetailType.TYPE3: contentItems = createDetailType3Items(props.data); break;
  }

  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

const createDetailType1Items = data => {

  const datas = data.contents.map((work, i) => {
    return new TimeLineData(
        i,
        new Date(work.start_date),
        new Date(work.end_date),
        work.title,
        work.contents,
        work.label ? work.label.split(',') : []
    );
  });

  const contentItems = [];
  contentItems.push(<TimeLine datas={datas} usePeriod />);

  return contentItems;
};

const createDetailType2Items = data => {

  const style={ display: 'inline-block', marginRight: '5px', color: '#fff' };

  let works = data.contents.map( (work, i) => {
    let date =
        `(${DateFormat.format(DateTime.fromDateObject(new Date(work.start_date)), 'Y-m', DateLocale.EN)} \
    ~ ${DateFormat.format(DateTime.fromDateObject(new Date(work.end_date)), 'Y-m', DateLocale.EN)})`;
    let labels = work.label.split(',').map((label, idx) => (<span key={idx} className='label label-default' style={style}>{label}</span>));
    return (
        <div key={i}>
          <h3>{work.title} {date}</h3>
          <ReactMarkdown source={work.desc}/>
          {labels}
        </div>
    );
  });

  const contentItems = [];
  contentItems.push(works);

  return contentItems;
};

const createDetailType3Items = data => {

  const datas = data.contents.map((work, i) => {
    return new TimeLineData(
        i,
        new Date(work.start_date),
        new Date(work.end_date),
        work.title,
        work.desc,
        work.label ? work.label.split(',') : []
    );
  });

  const contentItems = [];
  contentItems.push(<TimeLine datas={datas} usePeriod />);

  return contentItems;
};

WorkExperience.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
WorkExperience.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', content_detail_type: 1, contents: [] } };

export default WorkExperience;