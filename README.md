# React - Gallery of My Life APP

This is a gallery page to share pictures of things that are important to me. Visitors can click on an image to see a description and use a button to "like" an image. 

This is a gallery built using mulitple components - an `App`, `GalleryList`, and `GalleryItem`.

- `App` - represents the overall application or site 
- `GalleryList` - represents the gallery of images.
- `GalleryItem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.

### Setup

There is no database component. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

### Images of the application

![Wireframe](example1.png)
![Wireframe](example2.png)
![Wireframe](example3.png)

## Credits

This project was based on an activitie from Prime Academy.