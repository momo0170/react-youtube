import React, { useState } from 'react';
import styles from '../css/RelatedVideos.module.css';
import TimeAgo from 'timeago-react';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';

export default function RelatedVideos({ video, videoId, convertNumber }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: relativeVds,
  } = useQuery(['relative', videoId], () => youtube.relative(videoId));
  return (
    <>
      <img src={url} alt="thumbnail" className={styles.thumbnail} />
      <div className={styles.contents}>
        <span className={styles.title}>{title}</span>
        <span className={styles.channelTitle}>{channelTitle}</span>
        <div className={styles.informations}>
          {/* <span className={styles.viewCount}>
            조회수 {convertNumber(videoInfo.statistics.viewCount)}회
          </span> */}
          {/* <span className={styles.uploadTime}>
            <TimeAgo datetime={videoInfo.snippet.publishedAt} locale="ko" />
          </span> */}
        </div>
      </div>
    </>
  );
}
