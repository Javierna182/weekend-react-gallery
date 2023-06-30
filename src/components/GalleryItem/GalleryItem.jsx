import React, { useState } from 'react';
import './GalleryItem.css';


export function GalleryItem({ image, likeButton }) {
    //add the const here 

    const [isHidden, setIsHidden] = useState(true);

    // toggles if we show the description or not
    const toggleDescription = () => {
        console.log('clicked a button');
        // set state
        setIsHidden(!isHidden)
    }

    return(
        // <div onClick={() => alert(`${image.src} You Clicked an image`)}>
        //     {image.src}
        <div className="card" style={{float:'left'}} >
            
            <div className="card-header">
            { !isHidden ? <p className="desc">{image.description}</p> : <img src={image.path}/> }
            <div className="card-body">
            <p>Likes:{image.likes}</p>
            <button className="likebtn" onClick={()=> likeButton(image.id)}>Like</button>
            <button className="switchbtn" onClick={toggleDescription}>Switch</button>
        </div>
        </div>
        </div>
        
    )
}