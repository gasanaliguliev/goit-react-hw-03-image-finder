import React from 'react';

const Modal = ({ image, onClose }) => (
  <div className="Overlay" onClick={onClose}>
    <div className="Modal">
      <img src={image.largeImageURL} alt={image.tags} />
    </div>
  </div>
);

export default Modal;
