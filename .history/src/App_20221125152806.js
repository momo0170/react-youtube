import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const API_KEY = process.env.REACT_APP_KEY;

function App() {
  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    keyword && navigate(`/videos/${keyword}`);
    fetch() //
      .then((res) => res.json()) //
      .then((data) => setVideos(data.items));
  }, [keyword]);
  console.log(videos);

  const queryClient = new QueryClient();
  return (
    <>
      <Header setKeyword={setKeyword} />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;

// 기본 경로로 돌아왔을 때 키워드 값도 비워줘야한다.
// paramId = undefined 면 keyword 값 ""
