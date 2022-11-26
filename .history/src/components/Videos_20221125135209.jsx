import React, { useEffect } from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useOutletContext, useParams } from 'react-router-dom';

export default function Videos() {
  const [videos, keyword] = useOutletContext();
  console.log(keyword);
  return (
    <div className={styles.main}>
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
