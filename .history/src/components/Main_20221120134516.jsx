import React from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useOutletContext, useParams } from 'react-router-dom';

export default function Main() {
  const [videos] = useOutletContext();
  const {} = useParams();
  return (
    <div className={styles.main}>
      {videos.map((video) => (
        <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
          <li className={styles.video}>
            <Video video={video} />
          </li>
        </Link>
      ))}
    </div>
  );
}
