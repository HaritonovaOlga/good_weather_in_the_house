import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <header className="site-header">
      <h1 className="site-title">{title}</h1>
    </header>
  );
}

export default Header;
