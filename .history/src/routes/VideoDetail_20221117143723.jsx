import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams();
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </>
  );
}
