import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ title, description, url, image }) => (
  <Head>
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description}/>
    <meta key="og:type" name="og:type" content='website'/>
    <meta key="og:title" name="og:title" content={title}/>
    <meta key="og:description" name="og:description" content={description}/>
    <meta key="og:url" name="og:url" content={url}/>
    <meta key="og:image" name="og:image" content={image}/>
  </Head>
);

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
};

export default Meta;