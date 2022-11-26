import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const API_KEY = process.env.REACT_APP_KEY;

function App() {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('bts');
  const navigate = useNavigate();

  // 컴포넌트가 처음 렌더링될 때만 실행됨
  useEffect(() => {
    keyword && navigate(`/videos/${keyword}`);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${API_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setVideos(data.items));
  }, [keyword]);
  console.log(keyword);
  console.log(videos);
  return (
    <>
      <Header setKeyword={setKeyword} />
      <Outlet context={[videos]} />
    </>
  );
}

export default App;
