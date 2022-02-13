import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
