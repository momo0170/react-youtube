import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const API_KEY = process.env.REACT_APP_KEY;
function App() {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('오버워치2');
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${API_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setVideos(data.items));
  }, [keyword]);
  return (
    <>
      <Header />
      <Main videos={videos} />
    </>
  );
}

export default App;
