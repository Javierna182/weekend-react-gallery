import React from 'react';
import './App.css';
// import { response } from 'express';
import { useEffect, useState } from 'react';
import { GalleryList } from '../GalleryList/GalleryList';

function App() {

  let [galleryList, setGalleryList] = useState([]);

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

  useEffect( () => {
    fetchGalleryImages();
  }, [])


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList imagesGallery={galleryList}/>

        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
