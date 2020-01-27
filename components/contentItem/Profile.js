/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ContentItem from '../ContentItem';
import _ from 'lodash';
import Education from "./Education";

const Profile = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  let items = [];
  items.push(<ReactMarkdown key={content.items[0].title} source={content.items[0].contents}/>);
  console.log('items : ', items);
  // return <div></div>;
  return (<ContentItem title={content.name} items={items}/>);
};

Profile.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    items: PropTypes.array,
  }),
};

export default Profile;