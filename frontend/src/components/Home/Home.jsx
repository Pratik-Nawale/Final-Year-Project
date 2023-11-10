// Home.jsx

import React, { useState, useEffect } from 'react';
import "./Home.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const accessKey = 'Y8R8fXmYs7wYHOBevG1h3szb8Xlj71UYz6LJA64VeLM';
        const response = await fetch(`https://api.unsplash.com/photos?query=sport&client_id=${accessKey}`);

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch images: ${errorMessage}`);
        }

        const data = await response.json();
        const imageUrls = data.map((item) => item.urls.regular);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error.message);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images, currentImage]);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="home">
      <div className="image-container">
        <button className="nav-button prev-button" onClick={handlePrevImage}>
        <img src="/images/left.png" alt="" />
        </button>
        {images.length > 0 && (
          <img
            src={images[currentImage]}
            alt={`Sports Image ${currentImage + 1}`}
          />
        )}
        <button className="nav-button next-button" onClick={handleNextImage}>
        <img src="/images/right.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
