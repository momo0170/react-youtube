import React from 'react';
import styles from '../css/Video.module.css';

export default function Video({ video }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  // search : video.id.videoId
  // mostPop : video.id
  console.log(videoId);
  return (
    <>
      <img src={url} alt="썸네일" className={styles.thumbnail} />
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
    </>
  );
}
