import './GalleryList.css';
import { GalleryItem } from '../GalleryItem/GalleryItem'

export function GalleryList({imagesGallery}) {
  return(
    <div>
      <h1>Gallery of My Life</h1>

    <ul>
      {
        imagesGallery.map(image => (
          <GalleryItem key={image.id} image={image} />
        ))
      }
    </ul>
    </div>
  );
}