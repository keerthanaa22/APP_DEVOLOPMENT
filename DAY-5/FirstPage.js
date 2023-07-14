import './FirstPage.css';
import profile from "./user.jpg";
import mail from "./mail.jpg";
import pass from "./pass.jpg";

function LoginPage() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>USER LOGIN</h1>
           <div>
             <img src={mail} alt="mail" className="mail"/>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="mail"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginPage;