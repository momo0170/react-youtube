import React, { useEffect, useState } from 'react';
import styles from '../css/VideoInformation.module.css';
import { format, register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';
import Youtube from '../api/youtube';
import { useQuery } from '@tanstack/react-query';

function VideoInformation({ videoInfo, convertNumber }) {
  const { channelId } = videoInfo && videoInfo.snippet;
  const youtube = new Youtube();
  // // 채널 정보
  // useEffect(() => {
  //   channelId &&
  //     fetch(
  //       `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet,statistics&key=${process.env.REACT_APP_KEY}`
  //     ) //
  //       .then((res) => res.json()) //
  //       .then((data) => setChannelInfo(data.items[0]))
  //       .catch((error) => console.log(error));
  // }, [channelId]);
  register('ko-format', ko);
  const {
    isLoading,
    error,
    data: channelInfo,
  } = useQuery(['channel', channelId], () => youtube.channel(channelId));
  console.log(channelInfo);
  return (
    <>
      {isLoading && <p>로딩...</p>}
      {error && <p>에러...</p>}
      {channelInfo && (
        <div>
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
              {/* <span className={styles.subscribers}>
            구독자 {convertNumber(channelInfo.statistics.subscriberCount)}명
          </span> */}
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
        </div>
      )}
    </>
  );
}
export default VideoInformation;
