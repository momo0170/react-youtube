import React from 'react';

export default function VideoInformation({ video }) {
  console.log(video);
  const { title, channelTitle } = video.snippet;
  return (
    <>
      <span>{title}</span>
      <span>{channelTitle}</span>
      <span>{description}</span>
    </>
  );
}
