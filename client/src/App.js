import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import ChannelingDoctor from "./pages/ChannelingDoctor";
import BookAppointment from "./pages/BookAppointment";
import AppointmentList from "./pages/AppointmentList";


function App() {
  return (
    <BrowserRouter>
       <Routes>

         <Route path="/abcd" element={<ChannelingDoctor/>}/>
         <Route path="/123" element={<BookAppointment/>}/>
         <Route path="/321" element={<AppointmentList/>}/>

       </Routes>
    </BrowserRouter>
  );
}

export default App;
