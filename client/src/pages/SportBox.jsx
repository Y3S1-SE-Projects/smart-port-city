import React from 'react';

function SportBox(props) {
    return (

        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p>Here is the live sporting events which is taking place this week</p>
            </div>
        </div>
    )
}

export default SportBox;