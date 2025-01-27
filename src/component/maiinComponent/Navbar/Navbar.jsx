import React, { useState } from 'react';
import '../css/navbar.css';
import { HashLink } from 'react-router-hash-link';
import { CiMenuBurger } from 'react-icons/ci';
import { TiMinus } from 'react-icons/ti';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuActive(false);  
  };
  return (
    <div>
      <div className="responsive-bar">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className="menu" onClick={toggleMenu}>
          {menuActive ?  
            <TiMinus className={`menu-icon ${menuActive ? 'scale' : ''}`} size={26}/> 
            : 
            <CiMenuBurger className={`menu-icon ${menuActive ? 'scale' : ''}`} size={26}/>}
        </div>
      </div>
      <nav className={menuActive ? 'black active' : 'black'}>
        <ul>
          <li>
            <HashLink to="#home" smooth onClick={closeMenu}>Home</HashLink>
          </li>
          <li>
            <HashLink to="#about" smooth onClick={closeMenu}>About us</HashLink>
          </li>
          <li>
            <HashLink to="#services" smooth onClick={closeMenu}>Services</HashLink>
          </li>
          <li>
            <HashLink to="#contact" smooth onClick={closeMenu}>Contact Us</HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
