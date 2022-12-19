import React from 'react';
import styles from '../css/Video.module.css';
import { format, register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';

export default function Video({ video, videoId }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const youtube = new Youtube();
  // search : video.id.videoId
  // mostPop : video.id
  const convertNumber = (num) => {
    const formatter = new Intl.NumberFormat('ko', {
      notation: 'compact',
    });
    return formatter.format(num);
  };
  register('ko-format', ko);

  const {
    isLoading,
    error,
    data: videoInfo,
  } = useQuery(['videos', videoId], () => youtube.videos(videoId));
  // 채널 썸네일, 조회수, 시간 추가
  console.log(videoId);
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
