import React, { useState } from 'react';
import styles from '../css/RelatedVideos.module.css';
import TimeAgo from 'timeago-react';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';

export default function RelatedVideos({ video, channelId, convertNumber }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const
  const youtube = new Youtube();

  console.log(relativeInfo);
  return (
    <>
      <img src={url} alt="thumbnail" className={styles.thumbnail} />
      <div className={styles.contents}>
        <span className={styles.title}>{title}</span>
        <span className={styles.channelTitle}>{channelTitle}</span>
        <div className={styles.informations}>
          <span className={styles.viewCount}>
            ์กฐํ์ {convertNumber(videoInfo.statistics.viewCount)}ํ
          </span>
          <span className={styles.uploadTime}>
            <TimeAgo datetime={videoInfo.snippet.publishedAt} locale="ko" />
          </span>
        </div>
      </div>
    </>
  );
}
