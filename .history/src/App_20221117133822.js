import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoDetail from './routes/VideoDetail';
import Root from './routes/Root';
import Main from './components/Main';

const API_KEY = process.env.REACT_APP_KEY;
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: '/videos/:videoId',
          element: <VideoDetail />,
        },
      ],
    },
  ]);
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('');
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${
        keyword ? keyword : '오버워치2'
      }&type=video&key=${API_KEY}`
    ) //
      .then((res) => res.json()) //
      .then((data) => setVideos(data.items));
  }, [keyword]);

  return (
    <RouterProvider router={router}>
      <Header keyword={keyword} setKeyword={setKeyword} />
      <Main videos={videos} />
    </RouterProvider>
  );
}

export default App;
