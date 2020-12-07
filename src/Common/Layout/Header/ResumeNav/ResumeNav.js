import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ResumeNav.module.css';
import '../Header.css';

export function ResumeNav() {

    function Animation() {
        document.getElementById('dropDown').classList.add(classes.visible);
    }

    function AnimationR() {
        document.getElementById('dropDown').classList.remove(classes.visible);
    }

    return <>
        <NavLink activeClassName='activeNavLink' className='NavLink' onMouseEnter={Animation} to="/Resume">
            <p>رزومه</p>
            <div id='dropDown' className={classes.dropDown} onMouseLeave={AnimationR}>
                <NavLink activeClassName={classes.activeNavLink} className={classes.NavLink} to="/Resume/myResume">رزومه من</NavLink>
                <NavLink activeClassName={classes.activeNavLink} className={classes.NavLink} to="/Resume/myGitHub">GitHub</NavLink>
                <NavLink activeClassName={classes.activeNavLink} className={classes.NavLink} to="/Resume/myLinkedIn">Linked|N</NavLink>
            </div>
        </NavLink>
    </>
}