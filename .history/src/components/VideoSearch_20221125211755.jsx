import React, { useEffect, useState } from 'react';
import Video from './Video';
import styles from '../css/Main.module.css';
import { Link, useOutletContext, useParams } from 'react-router-dom';

export default function VideoSearch() {
  const [searchVideos, setSearchVideos] = useState();
  const keyword = useOutletContext();
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${params}&type=video&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setSearchVideos(data.items));
  }, [params]);
  console.log(keyword);
  console.log(params);
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
