import React, { useEffect } from 'react';
import Video from './Video';
import styles from '../css/Videos.module.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';

function Videos() {
  const { youtube } = new Youtube();
  // const [videos, setVideos] = useOutletContext();
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=30&key=${process.env.REACT_APP_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setVideos(data.items));
  // }, []);
  const { isLoading, error, data } = useQuery(['search', keyword], () => {});
  return (
    <div className={styles.main}>
      {videos &&
        videos.map((video) => (
          <Link to={`/videos/watch/${video.id}`} key={uuidv4()}>
            <li className={styles.video}>
              <Video video={video} videoId={video.id} />
            </li>
          </Link>
        ))}
    </div>
  );
}
export default Videos;
