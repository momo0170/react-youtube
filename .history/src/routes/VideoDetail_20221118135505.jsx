import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import styles from '../css/VideoDetail.module.css';

export default function VideoDetail() {
  const { videoId } = useParams();
  const [relatedVds, setRelatedVds] = useState([]);
  useEffect(() => {
    fetch(`/data/relatedvideo.json`) //
      .then((res) => res.json()) //
      .then((data) => setRelatedVds(data.items));
  }, []);
  console.log(relatedVds);
  return (
    <>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        {relatedVds.map((video) => (
          <li key={video.id.videoId}>
            <RelatedVideos video={video} />
          </li>
        ))}
      </div>
    </>
  );
}
