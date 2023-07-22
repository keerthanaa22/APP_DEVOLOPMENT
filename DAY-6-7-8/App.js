
import Login from "./pages/login/Login";
import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from "./pages/register/Register";
import './App.css';
import Profile from "./pages/profile/Profile";
import CloseFriend from "./component/closeFriend/CloseFriend";
import Online from "./component/online/Online";
import NotificationPage from "./component/notification/notification";


function App() {
return (
  <Router>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/online" element={<Online/>}/>
    <Route path="/notification" element={<NotificationPage/>}/>

  
</Routes>
</Router>

);
}

export default App;