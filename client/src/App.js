import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";

import ChannelingDoctor from "./pages/ChannelingDoctor";
import BookAppointment from "./pages/BookAppointment";
import AppointmentList from "./pages/AppointmentList";

import FoodMenu from "./pages/FoodMenu";
import AddFood from "./pages/AddFood";
import ChannelingHome from "./pages/ChannelingHome";


function App() {
  return (
    <BrowserRouter>
       <Routes>

         <Route path="/channeling-doctor" element={<ChannelingDoctor/>}/>
         <Route path="/book-appointment/:id" element={<BookAppointment/>}/>
         <Route path="/appointment-list" element={<AppointmentList/>}/>
         <Route path="/channeling-home" element={<ChannelingHome/>}/>

         <Route path="/foodmenu" element={<FoodMenu/>}/>
         <Route path="/addfood" element={<AddFood/>}/>

       </Routes>
        <ToastContainer style={{ width: "400px" }}/>
    </BrowserRouter>
  );
}

export default App;
