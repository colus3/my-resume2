/**
 * Created by Colus on 2016. 8. 20..
 */
import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import ContentItem from '../ContentItem';
import _ from 'lodash';

const Profile = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem />);
  }

  const items = [];
  items.push(<Markdown key={content.items[0].title} source={content.items[0].contents}/>);
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