import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Youtube from '../api/youtube';
import Loading from '../components/Loading';
import RelatedVideos from '../components/RelatedVideos';
import VideoInformation from '../components/VideoInformation';
import styles from '../css/VideoDetail.module.css';

function VideoDetail() {
  const { videoId } = useParams(); // :videoId
  const youtube = new Youtube();
  const convertNumber = (num) => {
    const formatter = new Intl.NumberFormat('ko', {
      notation: 'compact',
    });
    return formatter.format(num);
  };
  const {
    isLoading,
    error,
    data: videoInfo,
  } = useQuery(['videos', videoId], () => youtube.videos(videoId));

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>에러...</p>}
      {videoInfo && (
        <main className={styles.main}>
          <div className={styles.frame}>
            <div className={styles.player}>
              <iframe
                id="ytplayer"
                type="text/html"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
                title="video"
              ></iframe>
            </div>
            <div className={styles.informations}>
              <VideoInformation
                videoInfo={videoInfo}
                convertNumber={convertNumber}
              />
            </div>
          </div>
          <div className={styles.relatedVideos}>
            <RelatedVideos id={videoId} />
          </div>
        </main>
      )}
    </>
  );
}
export default VideoDetail;
