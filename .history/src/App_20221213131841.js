import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  const [word, setWord] = useState('');
  const [videos, setVideos] = useState([]);

  return (
    <>
      <Header word={word} setWord={setWord} />
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
