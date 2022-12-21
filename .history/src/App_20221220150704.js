import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          {/* 생선된 Provider(YoutubeApiProvider)로 감싸줌 */}
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
