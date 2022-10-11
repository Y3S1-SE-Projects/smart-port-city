import React from 'react';

function SportAbout(props) {
    return (
        <div id='sports-about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='sports-about-text'>
                <h2> {props.title} </h2>
                <h2>-</h2>
                <p>Purchase tickets to your favorite live sporting events without waiting in line in queues or avoid getting dissapointed if 
                    you were late to purchase a ticket or if tickets were sold out. Your purchase history for all the events you attend to will
                    be recorded, your ticket can be edited anytime and also deleted if needed.
                </p>
                <div className='sports-btn'>
                    <button> {props.button} </button>
                </div>  
            </div>
        </div>
    )
}

export default SportAbout;