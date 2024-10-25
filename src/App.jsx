import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Register from './pages/Register';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import Rent from './pages/Rent';
import ProtectedRoute from './AuthContext';

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
      {path:'/account',
        // element:<ProtectedRoute element={Account } role='user'/>
        element: <Account/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/rent/:index',
        element: <Rent/>
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
