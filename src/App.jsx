import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Register from './pages/Register';

// Define your routes with Layout as the wrapper
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout includes the NavBar
    children: [
      {
        path: '/',
        element: <Home />,  // Home is displayed under the NavBar
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/account',
        element: <Account/>
      },
      {
        path:'/register',
        element: <Register/>
      },

      // {
      //   path: '/about',
      //   element: <About />, // About Us is displayed under the NavBar
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />, // Contact is displayed under the NavBar
      // },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
