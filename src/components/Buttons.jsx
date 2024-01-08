import React from 'react';
import {hotels} from './data';

const Buttons = ({ menuItems, filterItems, setItems }) => (
        <div className="filters">
            {
                menuItems.map(val => (
                    <button className='range' 
                    onClick={() =>filterItems(val)}>
                        {val}
                    </button>
                ))
            }
            <button className='range'
            onClick={() => setItems(hotels)}>
                All
            </button>
        </div>
    );


export default Buttons