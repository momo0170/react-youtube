import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';

export default function VideoInformation({ video, videoId }) {
  const [channelInfo, setChannelInfo] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [videoInfo, setVideoInfo] = useState('');
  const { title, channelTitle, description, channelId } = video.snippet;
  const convertNumber = (num) => {
    // num = Number(num);
    if (0 <= num && num < 1000) {
      return num;
    } else if (1000 <= num && num < 100000) {
      return (num = `${Math.floor(num / 100) / 10}천회`);
    } else if (num >= 100000) {
      return (num = `${Math.floor(num / 10000)}만회`);
    }
  };
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet,statistics&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setChannelInfo(data.items[0]));
  }, []);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0]));
  }, []);
  console.log(video);
  console.log(videoInfo);
  return (
    <>
      <span className={styles.title}>{title}</span>
      <div className={styles.channelMetadata}>
        {channelInfo.snippet && (
          <img
            src={channelInfo && channelInfo.snippet.thumbnails.default.url}
            alt="채널 썸네일"
            className={styles.channelImg}
          />
        )}
        <div className={styles.frame}>
          <span className={styles.channelTitle}>{channelTitle}</span>
          {channelInfo.snippet && (
            <span className={styles.subscribers}>
              구독자 {channelInfo.statistics.subscriberCount}
            </span>
          )}
        </div>
        <button className={styles.subBtn}>구독</button>
      </div>
      <div className={styles.informations}>
        {/* {videoInfo.statistics && (
          <span className={styles.viewCount}>
            조회수 {convertNumber(viewCount)}
            <span className={styles.uploadTime}>2일전</span>
          </span>
        )} */}
        <span className={styles.desc}>{description}</span>
      </div>
    </>
  );
}
