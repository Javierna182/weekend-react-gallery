export function GalleryItem({ image, likeButton }) {
    //add the const here 
    return(
        // <div onClick={() => alert(`${image.src} You Clicked an image`)}>
        //     {image.src}
        <div>
            <img src={image.path}/>
            <p>{image.description}</p>
            <p>Likes:{image.likes}</p>
            <button onClick={()=> likeButton(image.id)}>Like</button>
            <button>Hide Image</button>
        </div>
    )
}