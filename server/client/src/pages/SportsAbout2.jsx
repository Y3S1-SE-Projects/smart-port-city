import React from 'react';

function SportAbout2(props) {
    return (
        <div id='sports-about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='sports-about-text'>
                <h2> {props.title} </h2>
                <h2>-</h2>
                <p>You can make an new payment for any live sporting events by slecting newpayment, you can also retireve 
                    the ticket details such as the date and price, update a ticket you have purchased in case you made a mistake 
                    or even delete any ticket purchased very easily.

                </p>
                <div className='sports-btn'>
                    <button> {props.button} </button>
                </div>  
            </div>
        </div>
    )
}

export default SportAbout2;