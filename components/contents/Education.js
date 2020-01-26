/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { DateFormat, DateTime, DateLocale } from 'dateutils';
import _ from 'lodash';

import { ContentItem } from '../../components';

const Education = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem />);
  }

  const educations = props.data.contents.map( education => {
    const startDate = DateFormat.format(DateTime.fromDateObject(new Date(education.start_date)), 'Y-m', DateLocale.EN);
    const endDate = DateFormat.format(DateTime.fromDateObject(new Date(education.end_date)), 'Y-m', DateLocale.EN);
    return `* ${startDate} ~ ${endDate} ${education.title}\n`;
  }).join(' ');

  const contentItems = [];
  contentItems.push(<ReactMarkdown source={educations} />);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

Education.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Education.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Education;