/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';

function App() {


  return (
    <Router>
      <Routes>

        <Route 
          exact path="/" element = {<Home/>}
        />

        <Route 
          exact path ="/login" element = {<Login/>} 
        />

        <Route 
          exact path="/signup" element = {<Signup/>}
        />


      </Routes>
    </Router>
  );
}

export default App;
