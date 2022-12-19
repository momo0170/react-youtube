import React, { useState } from 'react';
import styles from '../css/RelatedVideos.module.css';
import TimeAgo from 'timeago-react';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';
import { Link } from 'react-router-dom';

export default function RelatedVideos({ video, videoId, convertNumber }) {
  const { url } = video.snippet.thumbnails.medium;
  const { title, channelTitle } = video.snippet;
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: relativeVds,
  } = useQuery(['relative', videoId], () => youtube.relative(videoId));
  console.log(relativeVds);
  return (
    <>
      {relatedVds.map((video) => (
        <Link to={`/videos/watch/${video.id.videoId}`}>
          <li key={video.id.videoId} className={styles.relatedVideo}>
            <RelatedVideo
              video={video}
              channelId={channelId}
              convertNumber={convertNumber}
            />
          </li>
        </Link>
      ))}
    </>
  );
}
