import React from 'react';
import './Footer.css';
import { Selectors } from './Selectors/Selectors';
import { Address } from './Address/Address';
import { Logo } from '../Header/Logo/Logo';

export function Footer() {
    return <div className='footer'>
        <Selectors />
        <Logo />
        <Address />
    </div>
}