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
      <Outlet context={{ [videos, setVideos], word }} />
    </>
  );
}

export default App;
// Oulet에 word를 전달해야하는데 contex에 여러 props를 어떻게 전달할까
