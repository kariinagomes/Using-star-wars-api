import React from 'react';
import logo from '../../assets/imgs/logo-star-wars.jpg';
import './header.css';

const Header = () => {
  return (
    <div className="fixed-menu">
      <div>
        <img src={logo} alt="Logo star wars"/>
      </div>
    </div>
  )
}

export default Header;