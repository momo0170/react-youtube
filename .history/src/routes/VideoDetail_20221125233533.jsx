import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import VideoInformation from '../components/VideoInformation';
import styles from '../css/VideoDetail.module.css';

export default function VideoDetail() {
  const { videoId } = useParams();
  const [relatedVds, setRelatedVds] = useState([]);
  const [videos] = useOutletContext();
  // 관련된 영상을 가져옴
  useEffect(() => {
    fetch(`/data/relatedvideo.json`) //
      .then((res) => res.json()) //
      .then((data) => setRelatedVds(data.items));
  }, []);
  console.log(videos);

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
          {videos &&
            videos.map((video) => {
              if (video.id === videoId) {
                return (
                  <li key={video.id}>
                    <VideoInformation video={video} />
                  </li>
                );
              }
            })}
        </div>
      </div>
      <div className={styles.relatedVideos}>
        {relatedVds.map((video) => (
          <li key={video.id.videoId} className={styles.relatedVideo}>
            <RelatedVideos video={video} />
          </li>
        ))}
      </div>
    </main>
  );
}
