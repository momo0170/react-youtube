import React from 'react';
import Video from './Video';

export default function Main({ videos }) {
  return (
    <>
      {videos.map((video) => (
        <li key={video.id.videoId}>
          <Video video={video} />
        </li>
      ))}
    </>
  );
}
