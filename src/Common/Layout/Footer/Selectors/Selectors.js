import React from 'react';
import './Selectors.css';
import { NavLink } from 'react-router-dom';

export function Selectors() {
    return <div className='Container' >
        <hr />
        <NavLink className='text' exact to='/' >خانه</NavLink>
        <NavLink className='text' to='/Resume' >رزومه</NavLink>
        <NavLink className='text' to='/AboutUs' >درباره من</NavLink>
    </div>
}
