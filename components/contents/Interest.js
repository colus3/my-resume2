/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import { TagCloud } from 'react-tagcloud';
import _ from 'lodash';

import { ContentItem, ContentDetailType } from '../../components';

const Interest = (props) => {

  if ( _.isEmpty(props.data.contents) ) {
    return (<ContentItem/>);
  }

  let contentItems = [];
  switch ( props.data.content_detail_type ) {
  case ContentDetailType.TYPE1: contentItems = createDetailType1Items(props.data); break;
  case ContentDetailType.TYPE2: contentItems = createDetailType2Items(props.data); break;
  }

  return (<ContentItem resumeUIType={props.resumeUIType} title={props.data.display_name} contentItems={contentItems}/>);
};

const createDetailType1Items = data => {

  const style = { 'display': 'inline-block', 'marginRight': '5px' };
  const color = ['success', 'info', 'warning', 'danger', 'primary'];

  const interests = data.contents.map((interest, i) => {
    return (
        <span
            key={i}
            className={`label label-${color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)]}`}
            style={style}>
        {interest.title}
      </span>
    );
  });

  const contentItems = [];
  contentItems.push(<h3>{interests}</h3>);

  return contentItems;
};

const createDetailType2Items = data => {

  const interests = data.contents.map((interest, idx) => {
    return {value: interest.title, count: (100 - idx * 2)};
  });

  const contentItems = [];
  contentItems.push(
      <TagCloud
          minSize={5}
          maxSize={25}
          tags={interests}
      />
  );

  return contentItems;
};

Interest.propTypes = { resumeUIType: React.PropTypes.string, data: React.PropTypes.object };
Interest.defaultProps = { resumeUIType: '', data: { display_name: '', type: '', contents: [] } };

export default Interest;