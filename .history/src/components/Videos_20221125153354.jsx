import React, { useEffect } from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Videos() {
  const { param } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/data/${keyword ? 'search' : 'mostpopular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });
  return (
    <div className={styles.main}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos &&
        videos.map((video) => (
          <Link to={`/videos/watch/${video.id.videoId}`} key={video.id.videoId}>
            <li className={styles.video}>
              <Video video={video} />
            </li>
          </Link>
        ))}
    </div>
  );
}
