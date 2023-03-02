import React, { useState } from 'react';

const ImageCarousel = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };
  const handleNext = () => {
    setSelectedImage((selectedImage + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((selectedImage + images.length - 1) % images.length);
  };


  const images = [
    { url: 'image1.jpeg', videoUrl: 'video1.mp4' },
    { url: 'img2.png', videoUrl: 'video2.mp4' },
    { url: 'image3.png', videoUrl: 'video3.mp4' },
    { url: 'image4.png', videoUrl: 'video4.mp4' },
  ];

  return (
    <>
      <div className="image-carousel">
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/${images[selectedImage].url}`}
            alt={`Image ${selectedImage}`}
            onClick={() => handleImageClick(selectedImage)}
          />
          <button onClick={() => handleImageClick(selectedImage)}>Watch Video</button>
        </div>
        <div className="navigation">
          <button onClick={handlePrev}>{'Next'}</button>
          <button onClick={handleNext}>{'Previous'}</button>
        </div>
      </div>
      {showVideo && (
        <div className="video-popup">
          <video src={`${process.env.PUBLIC_URL}/videos/${images[selectedImage].videoUrl}`} controls />
          <button onClick={handleVideoClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;