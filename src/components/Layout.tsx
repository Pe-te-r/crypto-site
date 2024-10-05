import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar is always displayed */}
      <NavBar />
      
      {/* Ensure content takes up all available vertical space */}
      <div className="flex-grow p-4 pt-0 h-full">
        <Outlet />
      </div>

      {/* Footer will always be at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
