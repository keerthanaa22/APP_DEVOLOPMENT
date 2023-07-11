import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './signup.css';

const Signup= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' && email === '' && password === '' && confirmPassword === '') {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('Registration successful!');
    }
  };
  

  return (
    <div className="body1">
    <div name="class1">
    
      <center><h1>Register Form</h1></center>
      <br/>
      <form className="form1"onSubmit={handleSubmit}>
        <label className="name1">
          Name: 
        </label>
        <div className="fld1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          </div>
        <label className="name2">
          Email:
        </label>
        <div className="fld2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
        <label className="name3">
          Password:
        </label>
        <div className="fld3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          <label className="name3">
            ConfirmPassword:
          </label>
          <div className="fld3">
            <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required/>
          </div>
          {error && <p className="error-message">{error}</p>}

        <br/>
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
  );
  }
export default Signup;