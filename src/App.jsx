/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AdminHome from './Pages/Home/HomeAdmin';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import HomeAdmin from './Pages/Home/HomeAdmin';
import Kurties from './Pages/Kurties/Kurties';
import UserProfile from './Pages/Profile/Profile';

function App() {


  return (
    <Router>
      <Routes>

        <Route 
          exact path="/" element = {<Home/>}
        />

        <Route 
          exact path="/adminHome" element = {<HomeAdmin/>}
        />

        <Route 
          exact path="/userProfile" element = {<UserProfile/>}
        />

        <Route 
          exact path="/kurties" element = {<Kurties/>}
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
