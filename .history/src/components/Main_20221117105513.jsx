import React from 'react';
import Video from './Video';
import styles from './css/Main.module.css';
import { useNavigate } from 'react-router-dom';

export default function Main({ videos }) {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate('/videos');
  };
  return (
    <div className={styles.main}>
      {videos.map((video) => (
        <li
          key={video.id.videoId}
          className={styles.video}
          onClick={handlePage}
        >
          <Video video={video} />
        </li>
      ))}
    </div>
  );
}
