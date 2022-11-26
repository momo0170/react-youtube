import React from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video }) {
  console.log(video);
  const { title, channelTitle, description, channelId } = video.snippet;
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
