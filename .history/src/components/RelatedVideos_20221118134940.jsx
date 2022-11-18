import React from 'react';

export default function RelatedVideos({ video }) {
  const { url } = video.snippet.thumbnails.default;
  return <div>{url}</div>;
}
