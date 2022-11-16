import React from 'react';
import Video from './Video';

export default function Main({ videos }) {
  console.log(videos);
  return (
    <>
      {videos.map((video) => (
        <li>
          <Video key={video.id.videoId} video={video} />
        </li>
      ))}
    </>
  );
}
