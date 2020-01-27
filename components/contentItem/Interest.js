/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TagCloud } from 'react-tagcloud';
import _ from 'lodash';

// import { ContentItem, ContentDetailType } from '../../components';
import ContentItem from '../contentItem';

const Interest = ({ content }) => {

  if ( _.isEmpty(content.items) ) {
    return (<ContentItem/>);
  }

  const contentItems = createItems(content);
  console.log(contentItems);
  // switch ( props.data.content_detail_type ) {
  // case ContentDetailType.TYPE1: contentItems = createDetailType1Items(props.data); break;
  // case ContentDetailType.TYPE2: contentItems = createDetailType2Items(props.data); break;
  // }

  return (<ContentItem key={content.types} title={content.name} items={contentItems}/>);
};

// const createDetailType1Items = data => {
//
//   const style = { 'display': 'inline-block', 'marginRight': '5px' };
//   const color = ['success', 'info', 'warning', 'danger', 'primary'];
//
//   const interests = data.contents.map((interest, i) => {
//     return (
//         <span
//             key={i}
//             className={`label label-${color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)]}`}
//             style={style}>
//         {interest.title}
//       </span>
//     );
//   });
//
//   const contentItems = [];
//   contentItems.push(<h3>{interests}</h3>);
//
//   return contentItems;
// };

const createItems = content => {

  const interests = content.items.map((interest, idx) => {
    return {value: interest.tagName, count: (100 - idx * 2)};
  });

  console.log('interests', interests);

  const contentItems = [];
  contentItems.push(
      <TagCloud
        key={content.type}
        minSize={5}
        maxSize={25}
        tags={interests}
        onClick={tag => alert(`'${tag.value}' was selected!`)}
      />
  );

  return contentItems;
};

Interest.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    items: PropTypes.array,
  }),
};

export default Interest;