import React, { useState } from 'react';
import styles from '../css/RelatedVideos.module.css';
import TimeAgo from 'timeago-react';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';

export default function RelatedVideos({ video, channelId, convertNumber }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const youtube = new Youtube();
  // // 비디오 정보
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setVideoInfo(data.items[0]));
  // }, [videoId]);
  const {
    isLoading,
    error,
    data: relativeInfo,
  } = useQuery(['relative', channelId], () => youtube.relative(channelId));
  return (
    <>
      <img src={url} alt="thumbnail" className={styles.thumbnail} />
      <div className={styles.contents}>
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
    </>
  );
}
