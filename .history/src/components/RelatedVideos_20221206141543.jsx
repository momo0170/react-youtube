import React from 'react';
import styles from '../css/RelatedVideos.module.css';
import TimeAgo from 'timeago-react';
import ko from '../timeago/ko';
import { register } from 'timeago.js';

export default function RelatedVideos({ video, videoId, convertNumber }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  console.log(videoId);
  return (
    <>
      <img src={url} className={styles.thumbnail} />
      <div className={styles.contents}>
        <span className={styles.title}>{title}</span>
        <span className={styles.channelTitle}>{channelTitle}</span>
        {/* {videoInfo && (
          <div className={styles.informations}>
            {videoInfo.statistics.viewCount && (
              <span className={styles.viewCount}>
                조회수 {convertNumber(videoInfo.statistics.viewCount)}
              </span>
            )}
            <span className={styles.uploadTime}>
              <TimeAgo datetime={videoInfo.snippet.publishedAt} locale="ko" />
            </span>
          </div>
        )} */}
      </div>
    </>
  );
}
