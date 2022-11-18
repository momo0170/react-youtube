import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Video from '../components/Video';

export default function VideoSearch() {
  const [videos] = useOutletContext();
  return (
    <div>
      {videos.map((video) => (
        <Link to={`/videos/${video.id.videoId}`}>
          <li key={video.id.videoId} className={styles.video}>
            <Video video={video} />
          </li>
        </Link>
      ))}
    </div>
  );
}
