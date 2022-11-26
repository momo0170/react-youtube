import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video }) {
  const [channelInfo, setChannelInfo] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const { title, channelTitle, description, channelId } = video.snippet;

  useEffect(() => {
    channelId &&
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet,statistics&key=${process.env.REACT_APP_KEY}`
      ) //
        .then((res) => res.json()) //
        .then((data) => setChannelInfo(data.items[0]));
  }, []);
  console.log(channelInfo);

  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.channelMetadata}>
        <img
          src={channelInfo && channelInfo.snippet.thumbnails.default.url}
          alt="채널 썸네일"
          className={styles.channelImg}
        />
        <div className={styles.frame}>
          <span className={styles.channelTitle}>{channelTitle}</span>
          <span className={styles.subscribers}>
            구독자 {channelInfo.statistics.subscriberCount}
          </span>
        </div>
        <button className={styles.subBtn}>구독</button>
      </div>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
