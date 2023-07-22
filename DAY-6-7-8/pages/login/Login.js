import "./login.css";
import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const users = [
    {
      
      email: 'asd@gmail.com',
      password: 'gskgsk22'
    },
    {
   
      email: 'user2@example.com',
      password: 'password2'
    },
    
  ];

  // Function to handle user login
  const handleLogin = (e) => {
    e.preventDefault();

    // Basic email format validation
    if (!email.includes('@')) {
      setError('Invalid email format.');
      return;
    }

    // Basic password validation (e.g., minimum length requirement)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Make the API request to login
    const BASE_URL = "http://localhost:8080";
    axios.get(BASE_URL + '/pages/login',{ email, password })
      .then(response => {
        // Handle the successful login (e.g., set authentication state, redirect, etc.)
        console.log('Logged in:', response.data);
        alert('LoggedIn successful!');
        navigate('/Profile');
        // Redirect the user to the profile page after successful login
        // You can use the router history or any navigation method you are using.
        // For example, with react-router-dom, you can use useHistory hook:
        // history.push('/Profile');
      })
      .catch(error => {
        // Handle login error (e.g., display error message)
        console.error('Login failed:', error);
        setError('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="login">
      {/* ... other JSX code ... */}
      <div className="loginWrapper">
        <div className="loginLeft">
              <h1 className="regiLogo">HuntL</h1>
              <span className="loginDesc">INFLUENCE AND INSPIRE</span>
            </div>
        <div className="loginRight">
          <div className="loginBox">
            <form onSubmit={handleLogin}>
              <input
                placeholder="Email"
                className="loginInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br></br>
              <br></br>
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br></br>
              <br></br>
              <Link to="/Profile"><button type="submit" className="loginButton">
                Log In
              </button></Link>
            </form>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <Link to="/Register">
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
            {error && <div className="errorMessage">{error}</div>}
          </div>
        </div>
        </div>
    </div>
  );
}
