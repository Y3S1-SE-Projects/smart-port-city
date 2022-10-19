import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h3>Contact Our Customer Support</h3>
            <h5>Our customer service team will reply to your email shortly so please stand by with us</h5>
            <div className='contact-input'>
                <input type='email' placeholder='example@gmail.com'/>
                <a href='#'>Contact</a>
            </div>
        </div>
    )
}

export default Contact;
