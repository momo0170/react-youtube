import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';
import TimeAgo from 'timeago-react';
import dayjs from 'dayjs';
import ko from 'timeago.js/lib/lang/ko';
import { register } from 'timeago.js';

function VideoInformation({ video, videoId }) {
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

  register('ko', ko);
  // 채널 정보
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet,statistics&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setChannelInfo(data.items[0]));
  }, []);
  // 비디오 정보
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0]));
  }, []);
  // console.log(video);

  console.log(channelInfo);

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
              <TimeAgo datetime={video.snippet.publishTime} locale="ko" />
            </span>
          </span>
        )}
        <span className={styles.desc}>{description}</span>
      </div>
    </>
  );
}
export default VideoInformation;
