import React from 'react';
import './InternationalLocation.css'


import usaFlag from '../../assets/image/USA.jpg';
import ukFlag from '../../assets/image/UKflag.png';
import australiaFlag from '../../assets/image/Australiaflag.jpg';

import canadaFlag from '../../assets/image/Canadaflag.png';

import uaeFlag from '../../assets/image/UAE.jpg';
import worldwideFlag from '../../assets/image/Worldwide.jpg';


const InternationalLocation = () => {
  return (
    <div className="international">
      <h2>International</h2>
      <div className="countries">
        <div className="country">
          <img src={usaFlag} alt="USA" />
          <h3>USA</h3>
        </div>
        <div className="country">
          <img src={ukFlag} alt="UK" />
          <h3>UK</h3>
        </div>
        <div className="country">
          <img src={australiaFlag} alt="Australia" />
          <h3>Australia</h3>
        </div>
        <div className="country">
          <img src={canadaFlag} alt="Canada" />
          <h3>Canada</h3>
        </div>
        <div className="country">
          <img src={uaeFlag} alt="UAE" />
          <h3>UAE</h3>
        </div>
        <div className="country">
          <img src={worldwideFlag} alt="Worldwide" />
          <h3>Worldwide</h3>
        </div>
      </div>
    </div>
  );
};

export default InternationalLocation;
