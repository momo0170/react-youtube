import React from 'react';

export default function VideoSearch({ videos }) {
  const {} = useParams();
  return (
    <div className={styles.main}>
      {videos &&
        videos.map((video) => (
          <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
            <li className={styles.video}>
              <Video video={video} />
            </li>
          </Link>
        ))}
    </div>
  );
}
