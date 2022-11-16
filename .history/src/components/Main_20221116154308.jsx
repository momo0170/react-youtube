import React from 'react';
import Video from './Video';
import styles from './css/Main.module.css';

export default function Main({ videos }) {
  return (
    <div className={styles.main}>
      {videos.map((video) => (
        <li key={video.id.videoId}>
          <Video video={video} />
        </li>
      ))}
    </div>
  );
}
