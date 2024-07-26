import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CakewallaImg from '../../assets/image/cakewalla.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import LoginPop from '../LoginPopUp/LoginPop';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);


  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    setLoginPopupOpen(true);
    toggleDropdown();
  };
  const handleProfileClick = () => {
    toggleDropdown();
  };
  const handleClosePopup = () => {
    setLoginPopupOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={CakewallaImg} alt="CakeWala" />
            <i>CakeWala</i>
          </Link>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          &#9776;
        </button>
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeNav}>Home</Link></li>
          <li><Link to="/about" onClick={closeNav}>About</Link></li>
          <li><Link to="/services" onClick={closeNav}>Service</Link></li>
          <li><Link to="/contact" onClick={closeNav}>Contact</Link></li>
          <li>
            <button className="profile-icon" onClick={handleProfileClick}>
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu1">
                <button className="dropdown-item1" onClick={handleLoginClick}>Sign In</button>
                
                <button className="dropdown-item1" onClick={closeNav}>Log Out</button>
              </div>
            )}
          </li>
        </ul>
        {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
      </div>
      {isLoginPopupOpen && <LoginPop isOpen={isLoginPopupOpen} onClose={handleClosePopup} />}
    </nav>
  );
};

export default Navbar;
