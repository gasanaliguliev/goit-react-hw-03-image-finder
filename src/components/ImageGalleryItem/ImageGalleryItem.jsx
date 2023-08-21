import React from 'react';

const ImageGalleryItem = ({ image, onItemClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="ImageGalleryItem-image"
      onClick={onItemClick}
    />
  </li>
);

export default ImageGalleryItem;
