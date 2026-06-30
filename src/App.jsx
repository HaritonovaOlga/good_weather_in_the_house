import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer/Footer';

function loadData() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .catch(err => {
      console.error('Fetch error:', err);
      throw err;
    });
}

function App() {
  return (
    <div>
      <Header title="Дом с запахом сосны" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
