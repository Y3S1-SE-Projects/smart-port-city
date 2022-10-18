import React from 'react';
import FacilitiesBox from './SportBox';

import basketball from '../images/basketball.png';
import cricket from '../images/cricket.png';
import tennis from '../images/tennis.png';
import golf from '../images/golf.png';


function SportFacilities() {
    return (
        <>
        <div id='sportfeatures'>
            <div className='s-container'>
                <div className='a-container'>
                    <FacilitiesBox image={basketball} title='Basketball' />
                    <button className='sport1'>Rs/- 2500</button>
                    <FacilitiesBox image={cricket} title='Cricket' />
                    <button className='sport2'>Rs/- 5500</button>
                    <FacilitiesBox image={tennis} title='Tennis' />
                    <button className='sport3'>Rs/- 9999</button>
                    <FacilitiesBox image={golf} title='Golf' />
                    <button className='sport4'>Rs/- 7500</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default SportFacilities;