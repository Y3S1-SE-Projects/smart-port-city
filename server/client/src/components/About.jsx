import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <h2>-</h2>
                <p>It is high time for Sri Lanka to make a mark in this world and the develpoment team of this web application 
                    has done just that. The the Port City which is currently undergoing construction and the develoment team has 
                    decided to run the whole city via this web application in which the the consumers has total control convince
                    on the services and facilities provided in the Port City. 
                </p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About;
