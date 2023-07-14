import logo from './logo.svg';
import './App.css';
 import LoginPage from './pages/Loginpage';
 import Signup from './pages/signup';
 import {  Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import Linker from './pages/Linker';
import Header from './pages/Header';
import RecipeReviewCard2 from './pages/Trending';
import Linker2 from './pages/linker2';
import Linker3 from './pages/linker3';
import Linker4 from './pages/linker4';
import Linker5 from './pages/linker5';



function App() {
  return (
    <div className="App">
    <Router>
            <Routes>
              {<Route path="/" element={<LoginPage/>} />}
              {<Route path="/signup" element={<Signup/>} />}
              {<Route path="/login" element={<Linker />}/>}
              {<Route path="/trending" element={<Linker2 />}/>}
              {<Route path="/controvertial" element={<Linker3 />}/>}
              {<Route path="/top" element={<Linker4 />}/>}
              {<Route path="/old" element={<Linker5 />}/>}

</Routes>
</Router>



        
      </div>
  
   
  );
}

export default App;