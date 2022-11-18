import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams();
  console.log(param);
  return <h1>VideoDetail {videoId}</h1>;
}
