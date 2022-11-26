import React, { useEffect, useState } from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useParams } from 'react-router-dom';

export default function Videos() {
  const { params } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setSearchVideos(data.items));
  }, []);
  console.log(params);
  console.log(searchVideos);
  return (
    <div className={styles.main}>
      {searchVideos &&
        searchVideos.map((video) => (
          <Link to={`/videos/watch/${video.id.videoId}`} key={video.id.videoId}>
            <li className={styles.video}>
              <Video video={video} />
            </li>
          </Link>
        ))}
    </div>
  );
}
