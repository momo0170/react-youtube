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
  console.log(videos);
  console.log(`keyword: ${keyword}`);
  // keyword가 없으면 mostPopular
  // keyword가 있으면 search
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos'], () => youtube.search(keyword)); // 키워드 검색 쿼리
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러...</p>}
      {videos && (
        <div className={styles.main}>
          {videos.map((video) => (
            <Link to={`/videos/watch/${video.id.videoId}`} key={uuidv4()}>
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
