import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import randomColor from 'randomcolor';
import TextField from '@mui/material/TextField';
function Room({room}) {
    const[rooms, setrooms]=useState([])
    const[loading,setLoading]=useState()
    const[error,seterror]=useState()
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
    },[])
  return (
    <div className='row'>
       <div className='roomsetcon'>
        <Accordion className="roomtypeheadrercontainer">
          <Accordion.Item eventKey="0" >
            <Accordion.Header className="roomtypeheadrer" >{room.name}</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>

                <tbody>
                  <tr>
                    <td>{room.typeone}</td>
                    <td> Rs. {room.rentpernighttypeone}</td>
                    <Link to={`/bookings/${room._id}`} ><Button variant="contained"> Add</Button></Link>

                  </tr>
                  <tr>  <td>{room.typetwo}</td>
                    <td> Rs.{room.rentpernighttypetwo}</td>
                    <Link to={`/bookings/${room._id}`} ><Button variant="contained"> Add</Button></Link>
                  </tr>

                </tbody>
              </Table>
            </Accordion.Body>
    
          </Accordion.Item>
         
        </Accordion>
<br></br><br></br><br></br>
       
      </div>

    </div>
  )
}

export default Room