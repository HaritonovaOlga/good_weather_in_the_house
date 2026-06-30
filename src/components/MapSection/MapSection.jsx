import { useEffect, useState } from 'react';
import './MapSection.css';

function MapSection() {
  const address =
    'Рязанская область, Рязанский район, деревня Шахманово, улица Строителей, дом 67';

  const lat = 54.60956;
  const lon = 39.73923;

  const mapIframe = (
    <iframe
      title="Яндекс Карты"
      src={`https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=16&pt=${lon},${lat},pm2dgn`}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
    />
  );

  return (
    <section className="map-section">
      <h2 className="section-title">Где мы находимся</h2>
      <p className="address-text">{address}</p>
      {mapIframe}
    </section>
  );
}

export default MapSection;
