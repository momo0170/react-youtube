import React from 'react';
import styles from '../css/RelatedVideos.module.css'
export default function RelatedVideos({ video }) {
  console.log(video);
  const { url } = video.snippet.thumbnails.default;
  return <img src={url} className={/>;
}
