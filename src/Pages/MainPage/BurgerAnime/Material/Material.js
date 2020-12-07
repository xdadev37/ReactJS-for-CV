import React from 'react';
import './Material.css';

export function Material(props) {
    const { meat, cheese, salad } = props;
    const meats = [];
    const cheeses = [];
    const salads = [];
    const Empty = meat + cheese + salad === 0;

    function pushDiv(key, className) {
        return <div key={key} className={className} ></div>
    }

    for (let i = 0; i < cheese; i++) {
        cheeses.push(pushDiv(i, 'cheese'))
    }

    for (let i = 0; i < meat; i++) {
        meats.push(pushDiv(i, 'meat'))
    }

    for (let i = 0; i < salad; i++) {
        salads.push(pushDiv(i, 'salad'))
    }

    return <>
        {cheeses}
        {meats}
        {salads}
        {Empty && <p className='empty' >حــداقـــل مــجـــاز ثـبــت سـفــارش یک گوشــت همــبــرگــر</p>}
    </>
}