import React from 'react';
import styles from '../css/RelatedVideos.module.css';

import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';
import { Link } from 'react-router-dom';
import RelativeVideo from './RelativeVideo';

export default function RelatedVideos({ videoId, convertNumber }) {
  const youtube = new Youtube();
  const {
    isLoading,
    error,
    data: relativeVds,
  } = useQuery(['relative', videoId], () => youtube.relative(videoId));
  console.log(relativeVds);
  return (
    <>
      <RelativeVideo channelId={channelId} convertNumber={convertNumber} />
    </>
  );
}
