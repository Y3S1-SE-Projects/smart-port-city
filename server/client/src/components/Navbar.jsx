import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';


function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >=50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to='/' className='logo'>
                <img src={logo} alt='logo'/>
            </Link>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="/" className='active'>Home</Link></li>
                <li><Link  to="/facilities">Functions</Link></li>
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>Contact Us</Link></li>
                <li><Link to='#'>Logout</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
