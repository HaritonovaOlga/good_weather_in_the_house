import React, { useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';
import './GallerySection.css';

const modules = import.meta.glob('../../assets/images/*.jpg', {
  eager: true,
  import: 'default',
});

const images = Object.values(modules).map((src) => ({
  original: src,
}));


function GallerySection() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="gallery-section">
      <h2 className="section-title">Галерея</h2>
      <button
        type="button"
        onClick={openModal}
        className="open-gallery-btn"
      >
        Открыть галерею
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ImageGallery
              items={images}
              showThumbnails={true}
              onRequestClose={closeModal}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="close-modal-btn"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
