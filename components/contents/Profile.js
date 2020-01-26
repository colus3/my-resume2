/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentItem } from '../../components';
import _ from 'lodash';

const Profile = (props) => {

  if ( _.isEmpty(props.data.contents) || _.isEmpty(props.data.contents[0].contents) ) {
    return (<ContentItem />);
  }

  let contentItems = [];
  contentItems.push(<ReactMarkdown source={props.data.contents[0].contents}/>);
  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

Profile.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Profile.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Profile;