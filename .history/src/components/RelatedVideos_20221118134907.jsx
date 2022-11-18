import React from 'react';

export default function RelatedVideos({ video }) {
  console.log(video);
  return <div>{video.snippet.thumbnails.default.url}</div>;
}
