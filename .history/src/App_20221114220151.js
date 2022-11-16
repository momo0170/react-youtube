import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [videos, setVideos] = useState([]);
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  useEffect(() => {
    fetch('/data/search.json') //
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
