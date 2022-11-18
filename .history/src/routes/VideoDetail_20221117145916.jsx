import React, { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams();
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
      <div>{videoId}</div>
    </>
  );
}
