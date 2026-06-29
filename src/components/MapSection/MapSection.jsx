import { useEffect, useState } from 'react';
import './MapSection.css';

const address = 'Рязанская область, Рязанский район, деревня Шахманово, улица Строителей, дом 67';

function MapSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.ymaps) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    // Вставьте свой API‑ключ от Яндекс Карт вместо YOUR_API_KEY
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
    script.async = true;
    script.defer = true;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setError('Не удалось загрузить Яндекс Карты');

    script.onload = handleLoad;
    script.onerror = handleError;
    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.ymaps) return;
    if (document.getElementById('yandex-map')) return;

    window.ymaps.ready(() => {
      const myMap = new window.ymaps.Map('yandex-map', {
        center: [54.6333, 39.7333],
        zoom: 15
      });

      const placemark = new window.ymaps.Placemark(myMap.getCenter(), {
        balloonContentHeader: 'Наш адрес',
        balloonContentBody: address,
        hintContent: 'Нажмите, чтобы увидеть адрес'
      }, {
        preset: 'islands#blueDotIcon'
      });

      myMap.geoObjects.add(placemark);
    });
  }, [isLoaded]);

  if (error) return <p className="error-message">{error}</p>;
  if (!isLoaded) return <p>Загрузка карты…</p>;

  return (
    <section className="map-section">
      <h2 className="section-title">Карта</h2>
      <div id="yandex-map" className="yandex-map-container" />
    </section>
  );
}

export default MapSection;
