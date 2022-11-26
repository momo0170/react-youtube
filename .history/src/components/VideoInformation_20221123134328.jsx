import React from 'react';

export default function VideoInformation({ video }) {
  console.log(video);
  const { title, channelTitle, description } = video.snippet;
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.channelTitle}>{channelTitle}</span>
      <span className={styles.desc}>{description}</span>
    </>
  );
}
