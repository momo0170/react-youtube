import React from 'react';
import styles from '../css/RelatedVideos.module.css';
export default function RelatedVideos({ video }) {
  console.log(video);
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  return (
    <>
      <img src={url} className={styles.thumbnail} />
      <div className={styles.contents}>
        <span>{title}</span>
        <span>{channelTitle}</span>
      </div>
    </>
  );
}
