import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero';
import Products from './components/Products';
import { products } from './components/Products/data';
import { GlobalStyle } from './globalStyle';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={products} />
    </Router>
  );
}

export default App;
