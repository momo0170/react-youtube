import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video }) {
  const [channelInfo, setChannelInfo] = useState([]);
  const { title, channelTitle, description, channelId } = video.snippet;

  useEffect(() => {
    channelId &&
      fetch(`/data/channel.json`) //
        .then((res) => res.json()) //
        .then((data) => setChannelInfo(data.items[0]));
  }, []);
  console.log(channelInfo);

  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.channelMetadata}>
        <img
          src={channelInfo.snippet.thumbnails.default.url}
          alt="채널 썸네일"
          className={styles.channelImg}
        />
        <div className={styles.frame}>
          <span className={styles.channelTitle}>{channelTitle}</span>
          <span>구독자 {channelInfo.statistics.subscriberCount}</span>
        </div>
        <button>구독</button>
      </div>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
