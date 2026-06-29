import React from 'react';
import GallerySection from './GallerySection/GallerySection';
import MapSection from './MapSection/MapSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import PhoneButton from './PhoneButton/PhoneButton';

function MainContent() {
  return (
    <main>
      <GallerySection />
      <MapSection />
      <DescriptionSection />
      <PhoneButton phone="+79991234567" />
    </main>
  );
}

export default MainContent;
