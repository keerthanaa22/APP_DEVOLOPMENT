//import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/Loginpage';
import Signup from './pages/signup';
import {  Routes,Route, BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              {<Route path="/" element={<LoginPage/>} />}
              {<Route path="signup" element={<Signup/>} />}
            </Routes>
      </Router>
    </div>
  );
}

export default App