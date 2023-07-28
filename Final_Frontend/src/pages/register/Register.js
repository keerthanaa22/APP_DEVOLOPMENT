import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundImage:'url("https://res.cloudinary.com/dwkapllya/image/upload/v1690166921/iezimvhjlbjoiu5wo9gn.png")',      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#5aac7a',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
      
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

    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      padding: '20px',
      border: '2px solid #5aac7a',
      borderRadius: '10px',
      backgroundColor:'whitesmoke',
      height:'600px',
      marginLeft:'-600px',
      color:"goldenrod",

    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
      width:"400px",
      marginLeft:"50px"
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
      color: '#5aac7a',
      fontSize: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#5aac7a',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '90px',
      marginLeft: '30px',
      borderRadius:'10px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };
  const navigate=useNavigate('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const[isSubmit,setIsSubmit]=useState(false);
  const handleSubmit=async(event)=>{
    event.preventDefault();


    setIsSubmit(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }
    
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setUsername("");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate("/");
  
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if(isSubmit){
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
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        <br></br>
        {error && <div style={styles.error}>{error}</div>}
        
        <div style={styles.inputContainer}>
          <label style={styles.label}>User Name:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your user name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br></br>
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>

        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>

        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br></br>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={styles.button} type="submit">Sign Up</button>
        </div>
        <br></br>
        <p style={{marginLeft:"150px", color: "#5aac7a"}}>
          Already have an account? <Link to="/" style={{textDecoration:'none', color: "#5aac7a"}}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;