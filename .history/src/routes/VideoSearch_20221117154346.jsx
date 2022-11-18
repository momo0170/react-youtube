import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function VideoSearch() {
  const [videos] = useOutletContext();
  return <div>videosearch</div>;
}
