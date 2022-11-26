import React, { useEffect } from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Videos() {
  const [videos, setVideos] = useOutletContext();
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);
  console.log(videos);
  return (
    <div className={styles.main}>
      {videos &&
        videos.map((video) => (
          <Link to={`/videos/watch/${video.id}`} key={uuidv4()}>
            <li className={styles.video}>
              <Video video={video} />
            </li>
          </Link>
        ))}
    </div>
  );
}
