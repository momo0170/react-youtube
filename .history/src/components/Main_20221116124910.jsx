import React from 'react';
import Video from './Video';

export default function Main({ videos }) {
  return (
    <>
      {videos.map((video) => (
        console.log(video);
        <li>
          <Video key={video.id.videoId} video={video} />
        </li>
      ))}
    </>
  );
}
