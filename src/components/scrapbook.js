import React from 'react';
import './scrapbook.css';
import game from './images/maxresdefault.jpg';

export default props=>{
    return (
        <div className='scrapbook-container'>
            <img className='scrapbook-container' src={game}/>
        </div>
    )
}