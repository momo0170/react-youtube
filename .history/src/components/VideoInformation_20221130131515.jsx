import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';
import TimeAgo from 'timeago-react';
import ko from 'timeago.js/lib/lang/ko';
import { register } from 'timeago.js';

function VideoInformation({ videoInfo }) {
  const [channelInfo, setChannelInfo] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const { channelId } = videoInfo.snippet;
  const convertNumber = (num) => {
    const formatter = new Intl.NumberFormat('ko', {
      notation: 'compact',
    });
    return formatter.format(num);
  };

  // 채널 정보
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet,statistics&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setChannelInfo(data.items[0]));
  }, []);

  register('ko', ko);
  console.log(channelInfo);

  return (
    <>
      {videoInfo && (
        <span className={styles.title}>{videoInfo.snippet.title}</span>
      )}
      <div className={styles.channelMetadata}>
        {channelInfo.snippet && (
          <img
            src={channelInfo && channelInfo.snippet.thumbnails.default.url}
            alt="채널 썸네일"
            className={styles.channelImg}
          />
        )}
        <div className={styles.frame}>
          {videoInfo && (
            <span className={styles.channelTitle}>
              {videoInfo.snippet.channelTitle}
            </span>
          )}
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
              <TimeAgo datetime={videoInfo.snippet.publishTime} locale="ko" />
            </span>
          </span>
        )}
        {videoInfo && (
          <span className={styles.desc}>{videoInfo.snippet.description}</span>
        )}
      </div>
    </>
  );
}
export default VideoInformation;
