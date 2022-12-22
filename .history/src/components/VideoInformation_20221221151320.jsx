import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';
import { format, register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';
import Youtube from '../api/youtube';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

function VideoInformation({ videoInfo, convertNumber }) {
  const { channelId } = videoInfo && videoInfo.snippet;
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: channelInfo,
  } = useQuery(['channel', channelId], () => youtube.channel(channelId));

  register('ko-format', ko);
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>에러...</p>}
      {channelInfo && (
        <>
          <span className={styles.title}>{videoInfo.snippet.title}</span>
          <div className={styles.channelMetadata}>
            <img
              src={channelInfo && channelInfo.snippet.thumbnails.default.url}
              alt="채널 썸네일"
              className={styles.channelImg}
            />
            <div className={styles.frame}>
              <span className={styles.channelTitle}>
                {videoInfo.snippet.channelTitle}
              </span>
              <span className={styles.subscribers}>
                구독자 {convertNumber(channelInfo.statistics.subscriberCount)}명
              </span>
            </div>
            <button className={styles.subBtn}>구독</button>
          </div>
          <div className={styles.informations}>
            <span className={styles.viewCount}>
              조회수 {convertNumber(videoInfo.statistics.viewCount)}회
              <span className={styles.uploadTime}>
                {format(videoInfo.snippet.publishedAt, 'ko-format')}
              </span>
            </span>
            <span className={styles.desc}>{videoInfo.snippet.description}</span>
          </div>
        </>
      )}
    </>
  );
}
export default VideoInformation;
