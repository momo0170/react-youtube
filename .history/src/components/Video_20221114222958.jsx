import React from 'react';

export default function Video({ video }) {
  console.log(video.snippet.thumbnails.default.url);
  return <div>video</div>;
}
