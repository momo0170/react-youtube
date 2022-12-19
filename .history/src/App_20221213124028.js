import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const [word, setWord] = useState('');
  const [videos, setVideos] = useState([]);

  return (
    <>
      <Header word={word} setWord={setWord} />
      <YoutubeApiProvider>
        <Outlet context={[videos, setVideos]} />
      </YoutubeApiProvider>
    </>
  );
}

export default App;
