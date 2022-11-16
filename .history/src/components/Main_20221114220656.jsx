import React from 'react';
import Video from './Video';

export default function Main({ videos }) {
  return (
    <>
      {videos.map((video) => (
        <Video key={video.id.videoId} />
      ))}
    </>
  );
}
