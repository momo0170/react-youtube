import React, { useEffect } from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';
export default function Videos() {
  const { params } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', params], () => {
    const youtube = new Youtube();
    return youtube.search(params);
  });
  console.log(videos);
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