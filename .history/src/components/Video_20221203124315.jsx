import React, { useEffect, useState } from 'react';
import styles from '../css/Video.module.css';

export default function Video({ video, videoId }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const [videoInfo, setVideoInfo] = useState('');
  const [channelInfo, setChannelInfo] = useState([]);
  // search : video.id.videoId
  // mostPop : video.id

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0]));
  }, [videoId]);

  console.log(channelInfo);
  // 채널 썸네일, 조회수, 시간 추가
  return (
    <>
      <img src={url} alt="썸네일" className={styles.thumbnail} />
      <div className={styles.data}>
        <div className={styles.titleAndChannel}>
          <span className={styles.title}>{title}</span>
          <span className={styles.channelTitle}>{channelTitle}</span>
        </div>
      </div>
    </>
  );
}
