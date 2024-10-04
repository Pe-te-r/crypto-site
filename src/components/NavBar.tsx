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

const NavBar = () => {
  // State to control the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* NavBar */}
      <div className='m-0 p-2 h-[60px] items-center flex bg-[#D9D9D9] justify-between'>
        <h3 className='font-bold text-[20px]'>Peer Mining</h3>
        {/* Menu Icon for smaller screens */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <IoMenuSharp size={30} />
        </div>
        {/* Full menu for screens larger than 850px */}
        <div className='hidden md:flex space-x-6'>
          <a href="#" className='hover:text-blue-500 hover:underline'>Home</a>
          <a href="#" className='hover:text-blue-500 hover:underline'>About Us</a>
          <a href="#" className='hover:text-blue-500 hover:underline'>Contact</a>
          <a href="#" className='hover:text-blue-500 hover:underline'>Account</a>
        </div>
      </div>

      {/* Collapsible Menu for smaller screens */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col bg-[#D9D9D9] p-2 space-y-4">
          <a
            href="#"
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            Home
          </a>
          <a
            href="#"
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            About Us
          </a>
          <a
            href="#"
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            Contact
          </a>
          <a
            href="#"
            className='bg-white text-black py-2 px-4 w-full text-center rounded-lg hover:bg-blue-100 hover:shadow-md transition'
          >
            Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
