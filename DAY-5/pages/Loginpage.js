import './Loginpage.css';
import profile from "./user.jpg";
import mail from "./mail.jpg";
import pass from "./pass.jpg";
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
             <div>
              
             </div>

           </div>


         </div>
         <div>
           <h1>USER LOGIN</h1>
           <div>
            <br></br>
             <img src={mail} alt="mail" className="mail"/>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="mail"/>
             <input type="password" placeholder="Password" className="name"/>
           </div><br></br>
           <br></br>
          <div className="login-button">
          {/* <button>Login</button> */}
          {/* <input type="button">LOGIN</input> */}
          <Link to="/login"><button type="submit">LogIn</button></Link>
          </div>
          <br></br>
<br></br> 
<br></br>          
            <p className="link">
               
            </p>

            <Link to='/signup' className="login">Signup</Link>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginPage;