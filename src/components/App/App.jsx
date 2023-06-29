import React from 'react';
import './App.css';
// import { response } from 'express';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { GalleryList } from '../GalleryList/GalleryList';
import { GalleryItem } from '../GalleryItem/GalleryItem';



function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    fetchGalleryImages();
  }, [])

  //to get the Images
  const fetchGalleryImages = () => {
    fetch('/gallery')
      .then((response) => {
        console.log('Entire GET response:', response);
        return response.json();
      })
      .then((galleryImages) => {
        // The actual array comes from the parsed response body
        console.log('Gallery images:', galleryImages);

        // Set data into component state
        setGalleryList(galleryImages);
      })
      .catch((error) => {
        console.log('Error on get:', error);
      });
  };//end fetch Gallery

  const likeButton = (id) => {
    console.log('clicked',id);
    return fetch(`/gallery/like/${id}`, {
      method:'PUT',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      fetchGalleryImages()
    })
    .catch((error) => {
      console.error(error);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <GalleryList imagesGallery={galleryList} likeButton={likeButton}/>

        {/* <Route exact path="/gallery/:image">
          <GalleryItem />
        </Route> */}

        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
