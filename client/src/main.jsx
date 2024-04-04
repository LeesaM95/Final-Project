import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Facts from './pages/Facts.jsx';
import Forum from './pages/Forum.jsx';
import Account from './pages/Account.jsx';
import DeleteAccount from './pages/DeleteAccount.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/facts',
        element: <Facts />
      },
      {
        path: '/forum',
        element: <Forum />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/deleteaccount',
        element: <DeleteAccount />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
);