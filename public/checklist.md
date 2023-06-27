--- App - represents the overall application or site
--- GalleryList - represents the gallery of images. By componentizing, we could reuse this component in different applications
-- GalleryItem - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.


[]Use axios to retrieve (GET) data from to /gallery and store it in App.jsx.
[]Create a new component for the GalleryList and pass it the gallery data stored in App via props.
   []Iterate (loop over) the list of gallery data
   []Make GalleryItems
[]Create a new component called GalleryItem.jsx and pass it the individual gallery item via props.   
   []Update the GalleryList to use this component to display an image.
   []Swap the image with the description on click. Use conditional rendering.
   []Display the number likes for each item and include a like button.
   []When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id.
   []Update the gallery each time a like button is clicked.