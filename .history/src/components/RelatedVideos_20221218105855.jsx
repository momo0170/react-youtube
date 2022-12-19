import React from 'react';
import styles from '../css/RelatedVideos.module.css';

import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';
import { Link } from 'react-router-dom';
import Video from './Video';
import FakeYoutube from '../api/fakeYoutube';

export default function RelatedVideos({ id }) {
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: relativeVds,
  } = useQuery(['relative', id], () => youtube.relative(id));

  return (
    <>
      {relativeVds &&
        relativeVds.map((video) => (
          <Link to={`/videos/watch/${video.id}`}>
            <li key={video.id} className={styles.relatedVideo}>
              <Video key={video.id} video={video} videoId={video.id} />
            </li>
          </Link>
        ))}
    </>
  );
}
