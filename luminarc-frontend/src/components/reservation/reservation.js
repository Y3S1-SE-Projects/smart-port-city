import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import Accordion from 'react-bootstrap/Accordion';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import Room from './Room';
import randomColor from 'randomcolor';
import TextField from '@mui/material/TextField';
import moment from 'moment'


import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import './styles.css';
const {RangePicker}= DatePicker;

function Reservation() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);

  };
  const[rooms, setrooms]=useState([])
  const[loading,setLoading]=useState()
  const[error,seterror]=useState()
  const[fromdate,setfromdate]=useState()
  const[todate,settodate]=useState()
  useEffect(()=> {
    function getRooms(){
  setLoading(true)
      axios.get("http://localhost:4000/rooms/getallrooms").then((res)=>{
    console.log(res.data)
          setrooms(res.data);
          setLoading(false)
      }).catch((error)=>{
        seterror(true)
            alert("fetching failed");
          console.log(error)
          setLoading(false)
      })    
  
    }
    getRooms();
  },[]);
function filterByDate(dates)
{
  console.log(moment(dates[0]).format('DD-MM-YYYY'))
  console.log(moment(dates[1]).format('DD-MM-YYYY'))
  setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
  setfromdate(moment(dates[1]).format('DD-MM-YYYY'))
}

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='row'>
  
        {/* <Grid container>
  <Grid item xs={6} sm={5} md={8} lg={12} xl={3} style={{background:randomColor()}}>
     <label>Check In date</label>
  </Grid>
  <Grid item xs={6} sm={7} md={4} lg={12} xl={9} style={{background:randomColor()}}>
     <input type="date"></input>
  </Grid>
</Grid> */}


        <div className="headrcontainer">
          <div className='logoset'><h1>Luminarc Red</h1></div>
          <div className='headimg'><img src={'https://storage.googleapis.com/kaggle-datasets-images/1335/2411/80a61d268570eb2f0ce854f1344382b2/dataset-cover.jpg'} width="1000px" height="150px" /></div>
        </div>


         <div className="bookingcontainer">

          <div class="grid-container">
         
            <div class="grid-item"><h4>Select Date</h4> <RangePicker format='DD-MM-YYYY' onChange={filterByDate} /></div>
            {/* <div class="grid-item"><h4>Check-out Date</h4><input className="navigatinmenu" type="date" /></div> */}
            {/* <div class="grid-item"><h4>Promo-code</h4><input className="navigatinmenu" type="text" /></div> */}
            <div class="grid-item"><button className="navubutton">Search</button></div> 

          </div> 

        </div>  
         <div className='row mt-5'>
          <div className='col-md-3'>
             
          </div>
        </div> 

        <div className="headrertext">
          <h1 className='headertext2'>Available Room Types</h1>
        </div>
      
        <div>
   {loading?(<h1>Loading...</h1>):error?(<h1>Error</h1>):(rooms.map(room=>{
      return <div className='col-md-9'>
        <Room room={room} fromdate={fromdate} todate={todate}/>
      </div>
   }))}
</div>


      </div>
      <div className='roomimg'> <img src={'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' } width="500px"/></div>
    </LocalizationProvider>
  )
}

export default Reservation

