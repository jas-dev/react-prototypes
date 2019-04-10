import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_images';

export default props=>{
    return (
        <div className='scrapbook-container'>
            <ScrapbookImage about={imageData[0]}/>
        </div>
    )
}