import React from 'react';
import './Panier/Panier.js';
import './App.css';
import Header from './Header/Header.js';
import Articles from './Articles/Articles.js';
import Panier from './Panier/Panier.js';

function App() {
  return (

    <>
      <Header />
      <div className="container">

        <Panier />

        <div className="droite">
          <Articles />
        </div>
      </div>
    </>

  );
}

export default App;
