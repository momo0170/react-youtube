import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Youtube from '../api/youtube';
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
  // // 관련된 영상을 가져옴
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&type=video&key=${process.env.REACT_APP_KEY}`
  //   ) //
  //     .then((res) => res.json()) //
  //     .then((data) => setRelatedVds(data.items));
  // }, [videoId]);

  // // 비디오 정보
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setVideoInfo(data.items[0]));
  // }, [videoId]);

  return (
    <>
      {
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
            {/* {relatedVds.map((video) => (
            <Link to={`/videos/watch/${video.id.videoId}`}>
              <li key={video.id.videoId} className={styles.relatedVideo}>
                <RelatedVideos
                  video={video}
                  videoId={video.id.videoId}
                  convertNumber={convertNumber}
                />
              </li>
            </Link>
          ))} */}
          </div>
        </main>
      }
    </>
  );
}
export default VideoDetail;
