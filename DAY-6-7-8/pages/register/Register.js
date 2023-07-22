import "./register.css";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
const Register = () => 
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (!validateEmail(email)) {
      setError('Invalid email address.');
    } else if (!validateUsername(name)) {
      setError('Invalid username. Username should contain only letters, numbers, underscores, or dashes.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      // Make the API request to register
      const BASE_URL = "http://localhost:8080";
      

      axios.post(BASE_URL + '/users/register', { name, email, password})
        .then(response => {
          
          // Handle the successful registration (e.g., set authentication state, redirect, etc.)
          console.log('Registered:', response.data);
          alert('Registration successful!');
          navigate('/Profile');
        })
        .catch(error => {
          // Handle registration error (e.g., display error message)
          console.error('Registration failed:', error);
          setError('Registration failed. Please try again.');
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    return usernameRegex.test(username);
  };

  return (
    <div className="registerbg">
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h1 className="regiLogo">HuntL</h1>
            <span className="loginDesc">INFLUENCE AND INSPIRE</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Username"
                  className="loginInput"
                  value={name}
                  name = "name"
                  onChange={(e) => setName(e.target.value)}
                  required
                /><br></br>
                <br></br>
          

                <input
                  placeholder="Email"
                  className="loginInput"
                  value={email}
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                /><br></br>
                <br></br>
             

                <input
                  type="password"
                  placeholder="Password"
                  className="loginInput"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /><br></br>
                <br></br>
            

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="loginInput"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                {error && <p className="error-messagerp">{error}</p>}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                

               <button className="loginButtonn" type="submit">
                  Sign Up
                </button>  
                <br></br><br></br>
                
                <Link to="/">
                  <button className="loginRegisterButton">
                    Log into Account
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

