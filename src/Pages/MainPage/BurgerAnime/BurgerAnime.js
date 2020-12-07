import React from 'react';
import { Material } from './Material/Material';
import './BurgerAnime.css';

export function BurgerAnime(props) {
    const { meat, cheese, salad } = props;
    const details = { meat, cheese, salad };

    return <div className='box col-xl-5' >
        <div className='topbread' >
            <div className='Konjed' ></div>
            <div className='Konjed2' ></div>
        </div>
        <Material {...details} />
        <div className='bottombread' ></div>
    </div>
}