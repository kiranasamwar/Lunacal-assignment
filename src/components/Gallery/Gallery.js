import React, { useState } from 'react';
import './Gallery.css'; // Import the corresponding CSS file

const Gallery = () => {
  const [images, setImages] = useState([
    'https://i.pinimg.com/564x/c4/e5/84/c4e58411a8b0ee8a1f465ccc008ed0a9.jpg',
    'https://i.pinimg.com/564x/76/ae/74/76ae7493fdcc9e22bb126c76fdcd4dcb.jpg',
    'https://i.pinimg.com/564x/76/ae/74/76ae7493fdcc9e22bb126c76fdcd4dcb.jpg',
    'https://i.pinimg.com/564x/76/ae/74/76ae7493fdcc9e22bb126c76fdcd4dcb.jpg',
    'https://i.pinimg.com/564x/76/ae/74/76ae7493fdcc9e22bb126c76fdcd4dcb.jpg',
    'https://i.pinimg.com/564x/76/ae/74/76ae7493fdcc9e22bb126c76fdcd4dcb.jpg',
  ]); // Initial images

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImageUrl]); // Add the new image to the gallery
    }
  };

  const handleSlide = (direction) => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const scrollAmount = direction === 'left' ? -200 : 200; // Adjust the scroll amount based on arrow click
    galleryGrid.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <p className='gallery-text'>Gallery</p>
        <button className="add-image-button">
          <label htmlFor="file-upload" className="file-upload-label">
            + Add Image
          </label>
        </button>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleAddImage}
          style={{ display: 'none' }}
        />
        {/* Arrows for sliding images */}
        <div className="arrows-container">
          <span className="gallery-arrow" onClick={() => handleSlide('left')}>&#8249;</span>
          <span className="gallery-arrow" onClick={() => handleSlide('right')}>&#8250;</span>
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Artistic view ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
