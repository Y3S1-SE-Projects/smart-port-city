import React from "react";
import SportsHeader from "./SportsHeader";
import SportAbout from "./SportAbout";
import sportsaboutimage from '../images/sports-about1.png';
import sportsaboutimage2 from '../images/sports-about2.png';
import SportAbout2 from "./SportAbout";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from '../components/SliderData';
import SPresentation from "../components/SPresentation";
import SportFacilities from "./SportFacilities";


function Sports() {

    return (
        <>
            <SportsHeader/>
            <SportAbout image={sportsaboutimage} title='About Us' button='Purchase Now' />
            <ImageSlider slides={SliderData} />
            <SportAbout2 image={sportsaboutimage2} title='What we provide' button='Learn More' />
            <SportFacilities />
            <SPresentation />
            <Footer/>
        </>
    );
}

export default Sports;
