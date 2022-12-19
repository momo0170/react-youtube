import { useQueries } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
    data: result,
  } = useQueries({
    queries: [
      { queryKey: ['videos', videoId], queryFn: () => youtube.videos(videoId) },
      {
        queryKey: ['relativeVds', videoId],
        queryFn: () => youtube.relative(videoId),
      },
    ],
  });
  console.log(result);
  // // 관련된 영상을 가져옴
  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&type=video&key=${process.env.REACT_APP_KEY}`
  //   ) //
  //     .then((res) => res.json()) //
  //     .then((data) => setRelatedVds(data.items));
  // }, [videoId]);

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러...</p>}
      {result && (
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
                // videoInfo={videoInfo}
                convertNumber={convertNumber}
              />
            </div>
          </div>
          <div className={styles.relatedVideos}>
            {/* {relatedVds.map((video) => (
              <Link to={`/videos/watch/${video.id.videoId}`}>
                <li key={video.id.videoId} className={styles.relatedVideo}>
                  <RelatedVideos video={video} convertNumber={convertNumber} />
                </li>
              </Link>
            ))} */}
          </div>
        </main>
      )}
    </>
  );
}
export default VideoDetail;
