import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video }) {
  const [channelInfo, setChannelInfo] = useState([]);
  const { title, channelTitle, description, channelId } = video.snippet;
  const { channelThumb } = channelInfo.snippet.thumbnails.default.url;
  useEffect(() => {
    channelId &&
      fetch(`/data/channel.json`) //
        .then((res) => res.json()) //
        .then((data) => setChannelInfo(data.items[0]));
  }, []);
  console.log(channelInfo);
  console.log(channelThumb);

  return (
    <>
      <span className={styles.title}>{title}</span>
      <div>
        <img
          src={channelInfo.snippet.thumbnails.default.url}
          alt="채널 썸네일"
          className={channelImg}
        />
        <span className={styles.channelTitle}>{channelTitle}</span>
      </div>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
