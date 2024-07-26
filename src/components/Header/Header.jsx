import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => setDropdown(menu);
  const handleMouseLeave = () => setDropdown(null);

  return (
    <div className="Header">
      <div className="header-link">
      <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('wedding')}
          onMouseLeave={handleMouseLeave}
        >
    <Link to="/wedding-cake" className="link">Wedding Cake</Link>
          {dropdown === 'wedding' && (
            <div className="dropdown-menu">
            <Link to="/wedding-cake/custom" className="dropdown-item">Custom Cakes</Link>
             <Link to="/wedding-cake/traditional" className="dropdown-item">Traditional Cakes</Link>
            <Link to="/wedding-cake/modern" className="dropdown-item">Modern Cakes</Link>
            <Link to="/wedding-cake/trendy" className="dropdown-item">Trendy Cakes</Link>
            </div>
          )}
        </div>

   <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('birthday')}
          onMouseLeave={handleMouseLeave}
        >
    <Link to="/birthday-cake" className="link">Birthday Cake</Link>
          {dropdown === 'birthday' && (
            <div className="dropdown-menu">
              <Link to="/birthday-cake/custom" className="dropdown-item">Custom Cakes</Link>
              <Link to="/birthday-cake/theme" className="dropdown-item">Themed Cakes</Link>
              <Link to="/birthday-cake/traditional" className="dropdown-item">Traditional Cakes</Link>
              <Link to="/birthday-cake/modern" className="dropdown-item">Modern Cakes</Link>
            </div>
          )}
        </div>

     <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('anniversary')}
          onMouseLeave={handleMouseLeave}
        >
     <Link to="/anniversary-cake" className="link">Anniversary Cake</Link>
          {dropdown === 'anniversary' && (
            <div className="dropdown-menu">
            <Link to="/anniversary-cake/custom" className="dropdown-item">Custom Cakes</Link>
            <Link to="/anniversary-cake/theme" className="dropdown-item">Themed Cakes</Link>
            <Link to="/anniversary-cake/traditional" className="dropdown-item">Traditional Cakes</Link>
            <Link to="/anniversary-cake/modern" className="dropdown-item">Modern Cakes</Link>
            </div>
          )}
        </div>

    <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('apna')}
          onMouseLeave={handleMouseLeave}
        >
    <Link to="/apna-flavour" className="link">Apna Flavour</Link>
        {dropdown === 'apna' && (
          <div className="dropdown-menu">
             <Link to="/apna-flavour/flavour1" className="dropdown-item">Flavour 1</Link>
             <Link to="/apna-flavour/flavour2" className="dropdown-item">Flavour 2</Link>
            <Link to="/apna-flavour/flavour3" className="dropdown-item">Flavour 3</Link>
            <Link to="/apna-flavour/flavour4" className="dropdown-item">Flavour 4</Link>
        </div>
          )}
        </div>

       <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('hukka')}
          onMouseLeave={handleMouseLeave}
        >
    <Link to="/hukka-flavour" className="link">Hukka Flavour</Link>
        {dropdown === 'hukka' && (
          <div className="dropdown-menu">
            <Link to="/hukka-flavour/flavour1" className="dropdown-item">Flavour 1</Link>
            <Link to="/hukka-flavour/flavour2" className="dropdown-item">Flavour 2</Link>
            <Link to="/hukka-flavour/flavour3" className="dropdown-item">Flavour 3</Link>
            <Link to="/hukka-flavour/flavour4" className="dropdown-item">Flavour 4</Link>
        </div>
          )}
        </div>
        
    <div className="cart-icon">
        <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
    </div>
  </div>
</div>
  );
};

export default Header;
