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
      <div>
        <img src={channelThumb} alt="" />
        <span className={styles.title}>{title}</span>
      </div>
      <span className={styles.channelTitle}>{channelTitle}</span>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
