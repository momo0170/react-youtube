import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { videoId } = useParams();
  const [relatedVds, setRelatedVds] = useState([]);
  useEffect(() => {
    fetch(`/data/relatedvideo.json`) //
      .then((res) => res.json()) //
      .then((data) => console.log(data));
  });
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
        {relatedVds.map((vds) => (
          <li>
            <RelatedVideos />
          </li>
        ))}
      </div>
    </>
  );
}
