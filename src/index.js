import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles/index.css';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import TextFish from './pages/TextFish';
import BlankPage from './pages/BlankPage';
import CaseConvertion from './pages/CaseConvertion';
import BoxShadow from './pages/BoxShadow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/lorem',
        element: <TextFish />
      },
      {
        path: '/case',
        element: <CaseConvertion />
      },
      {
        path: '/box-shadow',
        element: <BoxShadow />
      },
      {
        path: '/blank',
        element: <BlankPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
