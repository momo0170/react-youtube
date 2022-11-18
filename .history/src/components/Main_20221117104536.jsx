import React from 'react';
import Video from './Video';
import styles from './css/Main.module.css';
import { Link } from 'react-router-dom';

export default function Main({ videos }) {
  return (
    <div className={styles.main}>
      {videos.map((video) => (
        <li key={video.id.videoId} className={styles.video}>
          <Link to={'/videos'}>
            <Video video={video} />
          </Link>
        </li>
      ))}
    </div>
  );
}
