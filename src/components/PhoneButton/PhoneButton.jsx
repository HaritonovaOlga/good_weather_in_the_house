import React from 'react';
import './PhoneButton.css';

function PhoneButton({ phone }) {
  const handleClick = () => {
    const count = (parseInt(localStorage.getItem('callCount') || '0') + 1);
    localStorage.setItem('callCount', String(count));
    console.log('Количество нажатий на кнопку:', count);
  };

  return (
    <section className="phone-button-section">
      <a
        href={`tel:${phone}`}
        onClick={handleClick}
        className="phone-link"
      >
        Позвонить: {phone}
      </a>
    </section>
  );
}

export default PhoneButton;
