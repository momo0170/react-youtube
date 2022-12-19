import React from 'react';
import Video from './Video';
import styles from '../css/Videos.module.css';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { YoutubeApiContext } from '../context/YoutubeApiContext';

function Videos() {
  const { keyword } = useParams();
  const { youtube } = useContext(YoutubeApiContext);
  // const [videos, setVideos] = useOutletContext();
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=30&key=${process.env.REACT_APP_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setVideos(data.items));
  // }, []);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos'], async () => youtube.search(keyword));
  console.log(videos);
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러...</p>}
      {videos && (
        <div className={styles.main}>
          {videos.map((video) => (
            <Link to={`/videos/watch/${video.id}`} key={uuidv4()}>
              <li className={styles.video}>
                <Video video={video} videoId={video.id} />
              </li>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
export default Videos;
