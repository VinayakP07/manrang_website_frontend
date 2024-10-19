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
import PantSet from './Pages/PantSet/PantSet';
import Pants from  './Pages/Pants/Pants';
import NightWear from  './Pages/NightWear/NightWear';
import PartyWear from './Pages/PartyWear/PartyWear';
import ShortKurtiesTops from './Pages/ShortKurtiesTops/ShortKurtiesTops';
import DupattaStole from './Pages/DupattaStole/DupattaStole';
import GownOnePiece from  './Pages/GownOnePiece/GownOnePiece';
import Cart from './Pages/Cart/Cart';
import Address from './Pages/Address/Address';





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
          exact path="/pantSet" element = {<PantSet/>}
        />

        <Route 
          exact path="/pants" element = {<Pants/>}
        />
        <Route 
          exact path="/partyWear" element = {<PartyWear/>}
        />
        <Route 
          exact path="/shortKurtiesTops" element = {<ShortKurtiesTops/>}
        />
        <Route 
          exact path="/dupattaStole" element = {<DupattaStole/>}
        />
        <Route 
          exact path="/gownOnePiece" element = {<GownOnePiece/>}
        />
        <Route 
          exact path="/nightWear" element = {<NightWear/>}
        />

        <Route 
          exact path ="/login" element = {<Login/>} 
        />

        <Route 
          exact path="/signup" element = {<Signup/>}
        />

         <Route 
          exact path="/cart" element = {<Cart/>}
        />
        <Route 
          exact path="/address" element={<Address />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
