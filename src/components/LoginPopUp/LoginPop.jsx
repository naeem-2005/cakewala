import React, { useState } from 'react';
import './LoginPop.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const LoginPop = ({ isOpen, onClose }) => {
    const [isSignIn, setIsSignIn] = useState(true);
  
    // const toggleForm = () => {
    //   setIsSignIn(!isSignIn);
    // };
    return (
        isOpen && (
          <div className="login-popup-overlay" onClick={onClose}>
            <div className="login-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="login-popup-close" onClick={onClose}>X</button>
              <div className="form-switch">
                <button className={`switch-button ${isSignIn ? 'active' : ''}`} onClick={() => setIsSignIn(true)}>Sign In</button>
                <button className={`switch-button ${!isSignIn ? 'active' : ''}`} onClick={() => setIsSignIn(false)}>Sign Up</button>
              </div>
              {isSignIn ? <SignIn /> : <SignUp />}
            </div>
          </div>
        )
      );
    };

export default LoginPop
