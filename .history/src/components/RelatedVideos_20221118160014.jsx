import React from 'react';
import styles from '../css/RelatedVideos.module.css';
export default function RelatedVideos({ video }) {
  const { url } = video.snippet.thumbnails.default;
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
