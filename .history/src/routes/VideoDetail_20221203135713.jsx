import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import VideoInformation from '../components/VideoInformation';
import styles from '../css/VideoDetail.module.css';
import { v4 as uuidv4 } from 'uuid';
import Video from '../components/Video';

function VideoDetail() {
  const { videoId } = useParams(); // :videoId
  const [relatedVds, setRelatedVds] = useState([]);
  const [videos] = useOutletContext();
  const [videoInfo, setVideoInfo] = useState('');

  // 관련된 영상을 가져옴
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&type=video&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setRelatedVds(data.items));
  }, [videoId]);

  // 비디오 정보
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0]));
  }, [videoId]);
  console.log(videoInfo);
  console.log(relatedVds);
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.player}>
          <iframe
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.informations}>
          {/* {videos &&
            videos.map((video) => {
              const id =
                typeof video.id === 'object' ? video.id.videoId : video.id;
              if (id === videoId) {
                return (
                  <li key={uuidv4()}>
                    <VideoInformation video={video} videoId={videoId} />
                  </li>
                );
              }
            })} */}
          <VideoInformation videoInfo={videoInfo} />
        </div>
      </div>
      <div className={styles.relatedVideos}>
        {relatedVds &&
          relatedVds.map((video) => (
            <li key={video.id.videoId} className={styles.relatedVideo}>
              <RelatedVideos video={video} />
            </li>
          ))}
      </div>
    </main>
  );
}
export default VideoDetail;
