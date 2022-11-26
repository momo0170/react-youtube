import React, { useEffect } from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video }) {
  console.log(video);
  const { title, channelTitle, description, channelId } = video.snippet;
  useEffect(() => {
    channelId &&
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${process.env.REACT_APP_KEY}`
      ) //
        .then((res) => res.json()) //
        .then((data) => console.log(data));
  });
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
