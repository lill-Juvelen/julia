// function gallery(galleryData) {

//     const result = galleryData.map((data) => {
//         return galleryItem(data)
//     })
//     return <div></div>
// }

// function galleryItem(data) {
//     return <div>
//         <video autoplay muted loop id="data.id">
//         <source src="data.filePath" type = {}  "video/mp4">
//       </video>
//     </div>
// }

import React from 'react'
import './Gallery.css'

function GalleryItem(data) {

  console.log('passing as filepath in galleryitem: ', data.filePath)
    return <> 
      <img
        src= {data.filePath}
        style = {data.style}
        alt='trololol'
      />
      </>
}

export default GalleryItem