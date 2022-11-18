import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { videoId } = useParams();
  const [relatedVds, setRelatedVds] = useState([]);
  useEffect(() => {
    fetch(`/data/relatedvideo.json`) //
      .then((res) => res.json()) //
      .then((data) => setRelatedVds(data));
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
        {relatedVds.map((vd) => (
          <li key={vd.id.videoId}>
            <RelatedVideos vds={vd} />
          </li>
        ))}
      </div>
    </>
  );
}
