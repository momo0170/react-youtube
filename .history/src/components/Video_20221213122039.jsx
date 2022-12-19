import React, { useEffect, useState } from 'react';
import styles from '../css/Video.module.css';
import TimeAgo from 'timeago-react';

import { register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

export default function Video({ video, videoId }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const [videoInfo, setVideoInfo] = useState('');

  // search : video.id.videoId
  // mostPop : video.id
  const convertNumber = (num) => {
    const formatter = new Intl.NumberFormat('ko', {
      notation: 'compact',
    });
    return formatter.format(num);
  };

  useEffect(() => {
    register('ko', ko);
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0]));
  }, [videoId]);

  console.log(videoInfo);
  // 채널 썸네일, 조회수, 시간 추가
  return (
    <>
      <img src={url} alt="썸네일" className={styles.thumbnail} />
      <div className={styles.data}>
        <div className={styles.titleAndChannel}>
          <span className={styles.title}>{title}</span>
          <span className={styles.channelTitle}>{channelTitle}</span>
          {videoInfo && (
            <div className={styles.informations}>
              {videoInfo.statistics.viewCount && (
                <span className={styles.viewCount}>
                  조회수 {convertNumber(videoInfo.statistics.viewCount)}회
                </span>
              )}
              <span className={styles.uploadTime}>
                <TimeAgo datetime={videoInfo.snippet.publishedAt} locale="ko" />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
