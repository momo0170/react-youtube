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
      .then((data) => console.log(data.items));
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
