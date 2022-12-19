import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';
import { format, register } from 'timeago.js';
import dayjs from 'dayjs';
import ko from 'timeago.js/lib/lang/ko';

export default function VideoInformation({ video, videoId }) {
  const [channelInfo, setChannelInfo] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [videoInfo, setVideoInfo] = useState('');
  const { title, channelTitle, description, channelId } = video.snippet;
  // const date = dayjs(video.snippet.publishedAt).format('YYYY-MM-DD');

  const convertNumber = (num) => {
    const formatter = new Intl.NumberFormat('ko', {
      notation: 'compact',
    });
    return formatter.format(num);
  };
  // console.log(date);
  register('ko', ko);
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
              구독자 {convertNumber(channelInfo.statistics.subscriberCount)}명
            </span>
          )}
        </div>
        <button className={styles.subBtn}>구독</button>
      </div>
      <div className={styles.informations}>
        {videoInfo && (
          <span className={styles.viewCount}>
            조회수 {convertNumber(videoInfo.statistics.viewCount)}회
            <span className={styles.uploadTime}>
              {format(video.snippet.publishedAt, ko)}
            </span>
          </span>
        )}
        <span className={styles.desc}>{description}</span>
      </div>
    </>
  );
}
