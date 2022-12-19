import React from 'react';
import styles from '../css/RelatedVideos.module.css';

import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';
import { Link } from 'react-router-dom';
import Video from './Video';

export default function RelatedVideos({ id }) {
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: relativeVds,
  } = useQuery(['relative', id], () => youtube.relative(id));
  console.log(relativeVds);
  return (
    <>
      {relativeVds &&
        relativeVds.map((video) => (
          <Link to={`/videos/watch/${video.id.videoId}`}>
            <li className={styles.relatedVideo}>
              <Video
                key={video.id.videoId}
                video={video}
                videoId={id}
                convertNumber={convertNumber}
              />
            </li>
          </Link>
        ))}
    </>
  );
}
