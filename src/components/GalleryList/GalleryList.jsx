import './GalleryList.css';
import { GalleryItem } from '../GalleryItem/GalleryItem'

export function GalleryList({imagesGallery}) {
  return(
    <ul>
      {
        imagesGallery.map(image => (
          <GalleryItem key={image.id} image={image} />
        ))
      }
    </ul>
  );
}