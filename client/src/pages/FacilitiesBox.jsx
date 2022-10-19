import React from 'react';

function FacilitiesBox(props) {
    return (

        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p>Click the below link to access the service you desire</p>
            </div>
        </div>
    )
}

export default FacilitiesBox;