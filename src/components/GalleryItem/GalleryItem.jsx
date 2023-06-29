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
        <div style={{float:'left'}} >
            
            { !isHidden ? <p class="desc">Description: {image.description}</p> : <img src={image.path}/> }
            <p>Likes:{image.likes}</p>
            <button onClick={()=> likeButton(image.id)}>Like</button>
            <button onClick={toggleDescription}>Hide Description</button>
        </div>
    )
}