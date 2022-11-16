import React from 'react';

export default function Video({ video }) {
  const { url } = video.snippet.thumbnails.default;
  return (
    <>
      <img src={url} alt="" />
    </>
  );
}
