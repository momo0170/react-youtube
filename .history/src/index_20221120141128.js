import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoDetail from './routes/VideoDetail';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Main />,
//       },

//       {
//         path: '/videos/:videoId',
//         element: <VideoDetail />,
//       },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
