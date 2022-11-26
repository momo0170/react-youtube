import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const [keyword, setKeyword] = useState('');
  const [videos, setSearchVideos] = useState([]);
  return (
    <>
      <Header keyword={keyword} setKeyword={setKeyword} />
      <Outlet context={keyword} />
    </>
  );
}

export default App;
