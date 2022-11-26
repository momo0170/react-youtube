import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoDetail from './routes/VideoDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videos from './components/Videos';
import VideoSearch from './routes/VideoSearch';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: 'videos',
        element: <Videos />,
      },
      {
        path: 'videos/:keyword',
        element: <VideoSearch />,
      },
      {
        path: 'videos/watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
