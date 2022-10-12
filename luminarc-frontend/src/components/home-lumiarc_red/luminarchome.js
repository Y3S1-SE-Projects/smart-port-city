import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ImageGallery from './image-gallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import randomColor from 'randomcolor';
import SimpleImageSlider from "react-simple-image-slider";






function Luminarchome() {
const[rooms, setrooms]=useState([])
  // useEffect(async() => {
  //   try {
  //     const data = (await axios.get('/rooms/getallrooms')).data
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },[])

  const images = [
    { url: "http://cdn.cnn.com/cnnnext/dam/assets/160502155618-terranea-vista-pool.jpg" },

    { url: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80" },
   
    { url: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }
  ];
  
  useEffect(()=> {
    function getRooms(){
  
      axios.get("http://localhost:4000/rooms/getallrooms").then((res)=>{
    console.log(res.data)
          setrooms(res.data);
      }).catch((error)=>{
          alert("fetching failed");
          console.log(error)
      })    
  
    }
    getRooms();
  },[])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
{/* <p>Thete are total {rooms.length}</p> */}

    

      <div>
      <SimpleImageSlider
        width='100%'
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>

      <div className="booknowcontainer">
        <Button className="booknowBtn">Book Now</Button>
      </div>



      <div className="headrerContainer"><h1 className="headertext1"> --Welcome to </h1> {' '} <h1 className="headertext2"> Luminarc Red--</h1></div>

      <div className="welcomeDisContainer"><p>Welcome to a chain of distinctive hotels and resorts that are bench-marked against the best in the world. Experience the warmth of true Sri Lankan hospitality as you indulge in thoughtful amenities and exclusive extravagances at Luminarc Red Resorts and Hotels. Discover #HappinessMoments at Luminarc Red Resorts and Hotels in Sri Lanka and take with you memories that are bound to bring you back.</p></div>


      <ImageGallery />

      <div className="headrerContainer"><h1 className="headertext1"> --Special</h1> {' '} <h1 className="headertext2"> Offers--</h1></div>


      <ImageGallery />

      <div className="headrerContainer"><h1 className="headertext1">  --Explore</h1> {' '} <h1 className="headertext2">Discover--</h1></div>


      <ImageGallery />

      {/* <Container>
      <Row>
        <Col><img src='https://images.pexels.com/photos/2127012/pexels-photo-2127012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img></Col>
        <Col>description</Col>
      </Row>
 
    </Container> */}

      <section id="aboutUs_bottom">
        <div class="flexContainer2">
          <div class="first">
            {/* <img src="assets\img\Resources\Green Sri Lanka.jpg" alt="" width="100%">  */}
            {/* <img src={logo} /> */}
            <img src={'https://images.unsplash.com/photo-1664913612529-032e57966c80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
              height="90%"/>

          </div>
          <div class="second">
            {/* <p class="Gpara">The International Federation of Library Associations (IFLA) awarded the runner-up for the "Green Library Award" in 2020 to the NEIC.</p><br></br> */}
            <p class="Gpara">Discover the beauty of Sri Lanka with Luminarc Red! We offer you exceptional hospitality in the Port City
              along the southern coast of the country and a boutique business hotel in the heart of Colombo.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Luminarchome