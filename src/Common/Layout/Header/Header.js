import React from 'react';
import { Logo } from './Logo/Logo';
import { ResumeNav } from './ResumeNav/ResumeNav';
import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
    return <div className='Header' >
        <Logo />
        <NavLink activeClassName='activeNavLink' className='NavLink' exact to="/">خانه</NavLink>
        <ResumeNav />
        <NavLink activeClassName='activeNavLink' className='NavLink' to="/AboutUs">درباره من</NavLink>
    </div>
}