
import Login from "./pages/login/Login";
import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from "./pages/register/Register";
import './App.css';
import Profile from "./pages/profile/Profile";
import CloseFriend from "./component/closeFriend/CloseFriend";
import Online from "./component/online/Online";
import NotificationPage from "./component/notification/notification";
import Signup from "./pages/register/Register";
import { Provider } from "react-redux";
import store from "./pages/login/store";
import FeedForm from "./FeedForm";



function App() {
return (
  <Provider store={store}>
  <Router>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Register" element={<Signup/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/online" element={<Online/>}/>
    <Route path="/notification" element={<NotificationPage/>}/>
    <Route path="/feedback" element={<FeedForm ></FeedForm>}></Route>

  
</Routes>
</Router>
</Provider>

);
}

export default App;