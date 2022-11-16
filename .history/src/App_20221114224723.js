import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [videos, setVideos] = useState([]);
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setVideos(data.items));
  }, []);
  console.log(videos);
  return (
    <>
      <Header />
      <Main videos={videos} />
    </>
  );
}

export default App;
