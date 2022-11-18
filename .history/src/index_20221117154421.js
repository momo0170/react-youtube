import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VideoDetail from './routes/VideoDetail';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoSearch from './routes/VideoSearch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/videos/:videoId',
        element: <VideoDetail />,
      },
      {
        path: '/videos/:keyword',
        element: <VideoSearch />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
