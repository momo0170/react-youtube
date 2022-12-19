import React, { useEffect, useState } from 'react';
import styles from '../css/Video.module.css';

export default function Video({ video, videoId }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const [videoInfo, setVideoInfo] = useState('');
  const [channelInfo, setChannelInfo] = useState([]);
  const { channelId } = videoInfo && videoInfo.snippet;
  // search : video.id.videoId
  // mostPop : video.id
  console.log(videoId);
  console.log(video);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0]));
  }, [videoId]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet,statistics&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setChannelInfo(data.items[0]))
      .catch((error) => console.log(error));
  }, [channelId]);
  console.log(videoInfo);
  console.log(channelInfo);
  // 채널 썸네일, 조회수, 시간 추가
  return (
    <>
      <img src={channelInfo.snippet.thumbnails.default.url} alt="채널 썸네일" />
      <div>
        <img src={url} alt="썸네일" className={styles.thumbnail} />
        <span className={styles.title}>{title}</span>
        <span className={styles.channelTitle}>{channelTitle}</span>
      </div>
    </>
  );
}
