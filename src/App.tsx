import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Feature from './components/Feature';
import Hero from './components/Hero';
import Products from './components/Products';
import { products, sweets } from './components/Products/data';
import { GlobalStyle } from './globalStyle';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={products} />
      <Feature />
      <Products heading="Sweet Treats for you" data={sweets} />
    </Router>
  );
}

export default App;
