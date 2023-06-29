import './GalleryList.css';
import { GalleryItem } from '../GalleryItem/GalleryItem'
import './GalleryList.css';

export function GalleryList({imagesGallery, likeButton}) {
  return(
    <div>
      <h1>Gallery of My Life</h1>

    <div>
      {
        imagesGallery.map(image => (
          <GalleryItem key={image.id} image={image} likeButton={likeButton} />
        ))
      }
    </div>
    </div>
  );
}