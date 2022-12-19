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
  console.log(id);
  return (
    <>
      {relativeVds &&
        relativeVds.map((video) => (
          <Link to={`/videos/watch/${id}`} key={id}>
            <li key={id} className={styles.relatedVideo}>
              <Video key={id} video={video} />
            </li>
          </Link>
        ))}
    </>
  );
}
