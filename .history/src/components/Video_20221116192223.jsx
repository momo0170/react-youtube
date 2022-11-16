import React from 'react';
import styles from './css/Video.module.css';

export default function Video({ video }) {
  console.log(video);
  const { url } = video.snippet.thumbnails.default;
  return (
    <>
      <img src={url} alt="썸네일" className={styles.thumbnail} />
    </>
  );
}
