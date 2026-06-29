import React, { useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import './GallerySection.css';


const images = [
  {
  original: 'src/assets/images/1.jpg',
  thumbnail: 'src/assets/images/1.jpg'
  },
 {
  original: 'src/assets/images/2.jpg',
 thumbnail: 'src/assets/images/2.jpg'
 },
 {
 original: 'src/assets/images/3.jpg',
 thumbnail: 'src/assets/images/3.jpg'
 },
 {
 original: 'src/assets/images/4.jpg',
 thumbnail: 'src/assets/images/4.jpg'
 },
 {
 original: 'src/assets/images/5.jpg',
 thumbnail: 'src/assets/images/5.jpg'
 },
 {
 original: 'src/assets/images/6.jpg',
 thumbnail: 'src/assets/images/6.jpg'
 },
 {
 original: 'src/assets/images/7.jpg',
 thumbnail: 'src/assets/images/7.jpg'
 },
 {
 original: 'src/assets/images/8.jpg',
 thumbnail: 'src/assets/images/8.jpg'
},
 {
 original: 'src/assets/images/9.jpg',
 thumbnail: 'src/assets/images/9.jpg'
},
 {
 original: 'src/assets/images/10.jpg',
  thumbnail: 'src/assets/images/10.jpg'
  },
{
  original: 'src/assets/images/11.jpg',
  thumbnail: 'src/assets/images/11.jpg'
},
{
  original: 'src/assets/images/12.jpg',
  thumbnail: 'src/assets/images/12.jpg' 
}


  
  ];

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
