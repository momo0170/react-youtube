import React from 'react';
import Video from './Video';
import styles from '../css/Videos.module.css';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { YoutubeApiContext } from '../context/YoutubeApiContext';

function Videos() {
  const { youtube } = useContext(YoutubeApiContext);
  const { keyword } = useParams();
  // keyword가 없으면 mostPopular -> video.id
  // keyword가 있으면 search -> video.id.videoId
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['search', keyword], () => youtube.search(keyword)); // 키워드 검색 쿼리
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
