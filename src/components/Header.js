// First section on the web page

// Including an image and current projects

import React from 'react'
import './Header.css'
import GalleryItem from './Gallery.js'

//const image1 = './images/_DSC0221.jpg';
//const image1 = '../_DSC0221.jpg'
//import image1 from '/images/_DSC0221.jpg'

function Header() {
    console.log(' in header the image file path is ', 'bla')
    return <>

    <div className="header">
        <div className="text-section">
            
            text about
            </div> 

    <GalleryItem
         filePath = '/images/_DSC0221.jpg'
         style = {{width: '50%', height:'50%'}} >
    </GalleryItem>

    </div>
    
    </>
}

export default Header