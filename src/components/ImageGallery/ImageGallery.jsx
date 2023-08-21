// src/components/ImageGallery.js
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onItemClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onItemClick={() => onItemClick(image)}
      />
    ))}
  </ul>
);

export default ImageGallery;

