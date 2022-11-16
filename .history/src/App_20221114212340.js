import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  // 컴포넌트가 처음 렌더링될 때만 실행됨
  useEffect(() => {
    fetch('/public/data/search.json') //
      .then((res) => console.log(res)) //
      .then((data) => res.json(data));
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
