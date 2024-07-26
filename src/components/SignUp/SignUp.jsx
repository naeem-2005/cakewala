import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-form-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-btn">SignUp</button>
      </form>
      <p>Already have an account? <Link >SignIn</Link></p>
      <div className="social-login">
        <button className="google-signup">
          <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
        </button>
        <button className="facebook-signup">
          <FontAwesomeIcon icon={faFacebook} /> Sign up with Facebook
        </button>
      </div>
    </div>
  );
}

export default SignUp;
