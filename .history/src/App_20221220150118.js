import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { darkModeProvider } from './context/DarkModeContext';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <darkModeProvider>
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            {/* 생선된 Provider(YoutubeApiProvider)로 감싸줌 */}
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </darkModeProvider>
    </>
  );
}

export default App;
