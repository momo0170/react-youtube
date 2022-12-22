import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoDetail from './routes/VideoDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videos from './components/Videos';
import { DarkModeProvider } from './context/DarkModeContext';

const router = createBrowserRouter([
  {
    path: '/react-youtube',
    element: <App />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: 'react-youtube/videos',
        element: <Videos />,
      },
      {
        path: 'react-youtube/videos/:keyword',
        element: <Videos />,
      },
      {
        path: 'react-youtube/videos/watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
    <RouterProvider router={router} />
  </DarkModeProvider>
);
