import React from 'react';
import styles from '../css/RelatedVideos.module.css';

import Youtube from '../api/youtube';
import { Link } from 'react-router-dom';

export default function RelativeVideo({ video, convertNumber }) {
  return (
    <>
      <img src={url} alt="썸네일" className={styles.thumbnail} />
      <div className={styles.data}>
        <div className={styles.titleAndChannel}>
          <span className={styles.title}>{title}</span>
          <span className={styles.channelTitle}>{channelTitle}</span>
          {videoInfo && (
            <div className={styles.informations}>
              {videoInfo && (
                <span className={styles.viewCount}>
                  조회수 {convertNumber(videoInfo.statistics.viewCount)}회
                </span>
              )}
              <span className={styles.uploadTime}>
                {format(videoInfo.snippet.publishedAt, 'ko-format')}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
