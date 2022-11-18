import React from 'react';
import Video from './Video';
import styles from './css/Main.module.css';
import { useNavigate } from 'react-router-dom';

export default function Main({ videos }) {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      {videos.map((video) => (
        <li key={video.id.videoId} className={styles.video}>
          <Video video={video} />
        </li>
      ))}
    </div>
  );
}
