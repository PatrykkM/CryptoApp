import React from 'react';
import { FaCoins } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <FaCoins className='icon' />
      <h1> Crypto <span className='red'>Spy</span></h1>
    </div>
  );
}

export default Navbar; 