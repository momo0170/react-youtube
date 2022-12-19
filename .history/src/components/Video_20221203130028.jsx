import React, { useEffect, useState } from 'react';
import styles from '../css/Video.module.css';
import TimeAgo from 'timeago-react';
import ko from '../timeago/ko';
import { register } from 'timeago.js';

export default function Video({ video, videoId }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const [videoInfo, setVideoInfo] = useState('');
  const [channelInfo, setChannelInfo] = useState([]);
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

  console.log(channelInfo);
  console.log(videoInfo);
  // 채널 썸네일, 조회수, 시간 추가
  return (
    <>
      <img src={url} alt="썸네일" className={styles.thumbnail} />
      <div className={styles.data}>
        <div className={styles.titleAndChannel}>
          <span className={styles.title}>{title}</span>
          <span className={styles.channelTitle}>{channelTitle}</span>
          <div>
            <span>조회수 {convertNumber(videoInfo.statistics.viewCount)}</span>
            <span>
              <TimeAgo datetime={videoInfo.snippet.publishedAt} locale="ko" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
