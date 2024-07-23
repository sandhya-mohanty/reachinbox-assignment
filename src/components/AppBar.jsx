import React from 'react';
import logo from '../assets/logo.svg';

function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex  items-center justify-center">
      <div className='flex gap-2'>
        <img
          src={logo}
          alt="logo"
          className="h-5"
        />
        <h2>REACHINBOX</h2>
      </div>
    </div>
  );
}

export default AppBar;
