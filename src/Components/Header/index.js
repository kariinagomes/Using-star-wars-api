import React from 'react';
import Logo from '../../assets/imgs/logo-star-wars.jpg';
import './header.css';

const Header = () => {
  return (
    <div className="fixed-menu">
      <div className="logo-content">
        <img src={Logo} alt="Logo star wars"/>
      </div>      
      <div className="menu-content">
        <button>Adicionar</button>
      </div>
    </div>
  )
}

export default Header;