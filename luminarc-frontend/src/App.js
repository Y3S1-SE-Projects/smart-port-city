import React from 'react';


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';

import Luminarchome from "./components/home-lumiarc_red/luminarchome";
import ImageGallery from './components/home-lumiarc_red/image-gallery';
import Room from './components/reservation/Room';
import Reservation from './components/reservation/reservation';
import Bookingcart from './components/reservation/bookingcart';


function App() {
  return (
    <Router>

    <>
 
      <Routes>
        {/* landing page */}
        <Route path="/Home" exact element={<Luminarchome/>} />
        <Route path="/Imagegallery" exact element={<ImageGallery/>} />
        
 
{/* Reservation page */}
        <Route path="/reservation" exact element={<Reservation/>} />
        <Route path="/room" exact element={<Room/>} />
        <Route path="/bookings/:roomid" exact element={<Bookingcart/>} />

      </Routes>
    </>
  </Router>
  );
}

export default App;
