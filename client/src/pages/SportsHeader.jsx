import React from 'react';
import {Link} from 'react-router-dom';

function SportsHeader() {
    return (
        <div id='sports'>
            <div className='sportname'>
                <h1><span>Smart Port City</span> Sri Lanka's First Digital Smart City</h1>
                <p className='details'> The port city which is currently undergoing construction will soon have a web application in which the users will be able to do any access kind of service on this online platform</p>
                <Link to='/table' className='sport-cv-btn'>Proceed Payment</Link>
            </div>
        </div>
    )
}

export default SportsHeader;