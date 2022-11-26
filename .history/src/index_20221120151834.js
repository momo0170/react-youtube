import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoDetail from './routes/VideoDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videos from './components/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: 'watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
