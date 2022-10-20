import React from "react";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Presentation from '../components/Presentation';
import Contact from '../components/Contact'
import About from "../components/About";
import Footer from "../components/Footer";
import aboutimage from '../images/about.png';
import aboutimage1 from '../images/download.png';

function Main() {
    return (
        <>
            <Header/>   
            <Feature/>
            <About image={aboutimage} title='About Us' button='Learn More' />
            <Presentation/>
            <Contact/>
            <About image={aboutimage1} title='Develoment Team' button='Buy me coffee' />     
            <Footer/>
        </>
    );
}

export default Main;