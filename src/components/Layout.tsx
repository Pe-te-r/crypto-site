import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div>
      {/* NavBar is always displayed */}
      <NavBar />
      {/* Outlet will render the component matched by the current route */}
      <div className="p-4 pt-0 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
