import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";

import ChannelingDoctor from "./pages/ChannelingDoctor";
import BookAppointment from "./pages/BookAppointment";
import AppointmentList from "./pages/AppointmentList";
import FoodMenu from "./pages/FoodMenu";
import AddFood from "./pages/AddFood";


function App() {
  return (
    <BrowserRouter>
       <Routes>

         <Route path="/abcd" element={<ChannelingDoctor/>}/>
         <Route path="/123" element={<BookAppointment/>}/>
         <Route path="/321" element={<AppointmentList/>}/>

         <Route path="/foodmenu" element={<FoodMenu/>}/>
         <Route path="/addfood" element={<AddFood/>}/>

       </Routes>
        <ToastContainer style={{ width: "400px" }}/>
    </BrowserRouter>
  );
}

export default App;
