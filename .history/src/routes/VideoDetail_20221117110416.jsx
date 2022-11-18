import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { param } = useParams();
  return <h1>VideoDetail {param}</h1>;
}
