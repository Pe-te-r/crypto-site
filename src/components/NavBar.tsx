// import React from 'react'
// import { IoMenuSharp } from 'react-icons/io5'

// const NavBar = () => {
//   return (
//     <div className='m-0 p-2 h-[60px] items-center flex bg-[#D9D9D9] justify-between'>
//         <h3 className='font-bold text-[20px]'>Peer Mining</h3>
//         <div><IoMenuSharp size={30}/></div>
//     </div>
//   )
// }

// export default NavBar


import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on small screens
  const toggleMenu = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className='m-0 p-2 h-[60px]  bg-gray-800 text-white shadow-sm z-20'>
    <div className='items-center flex lg:justify-around  justify-between'>
      {/* NavBar */}
        <Link to='/' className='font-bold text-[20px] cursor-pointer'>Peer Mining</Link>
        {/* Menu Icon for smaller screens */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <IoMenuSharp size={30} />
        </div>
        {/* Full menu for screens larger than 850px */}
        <div className='hidden md:flex space-x-6'>
          <Link to='/' className='hover:text-blue-500 hover:underline'>Home</Link>
          <Link to='/about' className='hover:text-blue-500 hover:underline'>About Us</Link>
          <Link to='/contact' className='hover:text-blue-500 hover:underline'>Contact</Link>
          <Link to='/account' className='hover:text-blue-500 hover:underline'>Account</Link>
        </div>
      </div>

      {/* Collapsible Menu for smaller screens */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out min-w-full
          ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}
        `}
      >
        <div className="flex flex-col bg-gray-700 p-2 space-y-4 mt-3 w-full">
          <Link to='/' onClick={toggleMenu}
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            Home
          </Link>
          <Link to='/about' onClick={toggleMenu}
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            About Us
          </Link>
          <Link to='/contact' onClick={toggleMenu}
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            Contact
          </Link>
          <Link to='/account' onClick={toggleMenu}
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
