import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import { useDispatch } from 'react-redux';
import { setUsername } from './UserSlice';
import axios from 'axios';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage:'url("https://res.cloudinary.com/dwkapllya/image/upload/v1690166921/iezimvhjlbjoiu5wo9gn.png")',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    overflow: 'hidden',

  },


  loginWrapper: {
    width: '70%',
    height: '70%',
    display: 'flex',
    marginLeft:'150px',
    marginTop:'680px',
    fontSize: '25px',
    color: '#46845e',
  },


  loginLeft:{
    flex: '1',
    display: 'flex',
    flexdirection: 'column',
    justifycontent: 'center',
    marginLeft:'300px',
  },

  regilogo:{
    marginRight:'100px'

  },

  login: {
    color:'#5aac7a',
    width: '500px',
    height: '500px',
    padding: '40px',
    border: '2px solid #8fbc8f',
    borderRadius: '10px',
    backgroundColor: '#F7F7F7',
    marginLeft:'-630px'
   
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#5aac7a',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color:'#5aac7a'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#5aac7a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'160px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#5aac7a',
    marginLeft: '-15px',
  },
};



function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);
  const dispatch = useDispatch();

  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      dispatch(setUsername(email))
      setCheckPass(false); // Show successful login message

      window.alert("Successfully Logged In");
      

      navigate("/Profile");
      setEmail('');
      setPass('');
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginWrapper}>
        <div className="loginLeft">
          <h1 className="regiLogo">HuntL</h1>
          <span className="loginDesc">INFLUENCE AND INSPIRE</span>
        </div>
      </div>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>
          <br></br>
          <br></br>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <br></br>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br></br>
            <br></br>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <br></br>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <br></br>
            <br></br>
            <br></br>
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {checkpass && alert('Successful login ' + email)}
          {checkpass && navigate('/home')}
          <Link to="/Register" style={styles.registerLink}>
            Don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;