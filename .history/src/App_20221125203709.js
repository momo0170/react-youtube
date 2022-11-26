import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const API_KEY = process.env.REACT_APP_KEY;

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

// 기본 경로로 돌아왔을 때 키워드 값도 비워줘야한다.
// paramId = undefined 면 keyword 값 ""
