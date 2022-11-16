import React from 'react';
import Video from './Video';

export default function Main({ videos }) {
  console.log(videos[0].id.videoId);
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
