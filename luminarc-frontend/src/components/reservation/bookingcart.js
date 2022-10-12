import React, {useState, useEffect} from 'react'
import { Link,useParams } from "react-router-dom";
import axios from 'axios';
import Room from './Room';
import Reservation from './reservation';


function Bookingcart() {
    const {roomid} = useParams();
    const {name} = useParams();
    console.log(roomid); // 👉️ {userId: '4200'}
  
    const [room,setroom]=useState();
    useEffect(()=> {
        function getRooms(){
    
          const data=axios.post("http://localhost:4000/rooms/getroombyid", roomid).data;
        console.log(data)
              setroom(data);
             
           
      
        }
        getRooms();
      },[]);
 
  return (
    <div>
       <h2>Room Id is 👉️ {roomid}</h2>
       <div className='row'>
        <div className='col-md-5'>
          
        </div>
        <div className='col-md-5'>
            <h1>Your Reservations</h1>
            <hr></hr>
            <b>
            <p>Name:mmm</p>
            <p>Check in:</p>
            <p>Check out:</p>
            <p>Max Count:{roomid}</p>
            </b>
            <hr></hr>
            <h3>Amount</h3>
            <hr></hr>
            <b>
            <p>Name:</p>
            <p>Check in:</p>
            <p>Check out:</p>
            <p>Max Count:</p>
            </b>
        </div>
       </div>
       
    </div>
  )
}

export default Bookingcart