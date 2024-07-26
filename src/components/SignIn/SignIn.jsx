import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <h2>SignIn</h2>
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
        <button type="submit" className="login-btn">SignIn</button>
      </form>
      <p>Not a member? <Link>SignUp</Link></p>
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

export default SignIn;
