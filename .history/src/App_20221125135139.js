import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const API_KEY = process.env.REACT_APP_KEY;

function App() {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const { paramId } = useParams();

  useEffect(() => {
    keyword && navigate(`/videos/${keyword}`);
    if (paramId === undefined) {
      setKeyword('');
    }
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&type=video&key=${API_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setVideos(data.items));
  }, [keyword]);
  console.log(videos);
  console.log(keyword);
  console.log(paramId);
  return (
    <>
      <Header setKeyword={setKeyword} />
      <Outlet context={[videos, keyword]} />
    </>
  );
}

export default App;

// 기본 경로로 돌아왔을 때 키워드 값도 비워줘야한다.
// paramId = undefined 면 keyword 값 ""
