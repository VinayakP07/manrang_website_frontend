import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
//import { useState } from 'react';
//import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  // };

  return (
    <Router>
      <Routes>
        <Route 
          exact path ="/login" element = {<Login/>} 
          // element={
          //   isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          // } 
        />
        <Route 
          exact path="/signup" element = {<Signup/>}
          // element={
          //   isAuthenticated ? <Navigate to="/login" /> : <Signup />
          // } 
        />
        <Route 
          exact path="/" element = {<Home/>}
          // element={
          //   <PrivateRoute isAuthenticated={isAuthenticated}>
          //     <Home onLogout={handleLogout} />
          //   </PrivateRoute>
          // } 
        />
        {/* { <Route path="*" element={<Navigate to="/login" />} /> } */}
      </Routes>
    </Router>
  );
}

export default App;
