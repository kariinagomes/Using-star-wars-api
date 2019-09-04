import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/logo-star-wars.jpg';
import './header.css';

const Header = () => {
  return (
    <div className="fixed-menu">
      <div className="logo-content">
        <Link to="/"><img src={Logo} alt="Logo star wars"/></Link>
      </div>      
      <div className="menu-content">
        {/* <button>Adicionar</button> */}
      </div>
    </div>
  )
}

export default Header;