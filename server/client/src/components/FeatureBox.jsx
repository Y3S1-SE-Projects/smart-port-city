import React from 'react';

function FeatureBox(props) {
    return (

        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p>You can access these services/ facilities by clicking 
                    on the "Functions" tab in the top navigation bar
                </p>
            </div>
        </div>
    )
}

export default FeatureBox;
