import React from 'react';
import styles from '../css/RelatedVideos.module.css';

import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';
import { Link } from 'react-router-dom';

export default function RelatedVideos({ videoId, convertNumber }) {
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: relativeVds,
  } = useQuery(['relative', videoId], () => youtube.relative(videoId));
  console.log(relativeVds);
  return (
    <>
      {relativeVds.map((video) => (
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
