import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video }) {
  console.log(video);
  const [channelInfo, setChannelInfo] = useState([]);
  const { title, channelTitle, description, channelId } = video.snippet;
  useEffect(() => {
    channelId &&
      fetch(`data/channel.json`) //
        .then((res) => res) //
        .then((data) => setChannelInfo(data));
  }, []);
  console.log(channelInfo);
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
