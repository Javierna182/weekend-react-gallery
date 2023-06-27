export function GalleryItem({ image }) {
    return(
        <div onClick={() => alert(`${image.id} You Clicked an image`)}>
            {image.id}
            <p>Likes:</p>
            <button>Like</button>
        </div>
    )
}