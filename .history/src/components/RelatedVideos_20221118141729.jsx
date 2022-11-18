import React from 'react';

export default function RelatedVideos({ video }) {
  console.log(video);
  const { url } = video.snippet.thumbnails.default;
  return <image url={url}></image>;
}
