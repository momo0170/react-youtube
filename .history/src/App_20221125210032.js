import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const [keyword, setKeyword] = useState('');
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
