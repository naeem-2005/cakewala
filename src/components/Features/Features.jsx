import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLock, faHeadset, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <div className="feature globe">
        <FontAwesomeIcon icon={faGlobe} size="3x" />
        <h3>Worldwide Delivery</h3>
        <p>We deliver gifts to over 70 countries</p>
      </div>
      <div className="feature lock">
        <FontAwesomeIcon icon={faLock} size="3x" />
        <h3>100% Safe & Secure Payments</h3>
        <p>Pay using secure payment methods</p>
      </div>
      <div className="feature headset">
        <FontAwesomeIcon icon={faHeadset} size="3x" />
        <h3>Dedicated Help Center</h3>
        <p>Chat with us</p>
      </div>
      <div className="feature mobile">
        <FontAwesomeIcon icon={faMobileAlt} size="3x" />
        <h3>Shop on the go</h3>
        <p>Download mobile app</p>
      </div>
    </div>
  );
};

export default Features;
