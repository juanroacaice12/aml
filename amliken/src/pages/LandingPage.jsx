import React from 'react';
import Header from '../components/Header';
import Antfo from '../components/Antfo';
import Home from '../components/Home'; // Asegúrate de importar About correctamente
import Products from '../components/Products';
import Services from '../components/Services';
import About from '../components/About';
import Noticias from '../components/Noticias';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Home /> {/* Usa el componente About */}
      <Products />
      <Services />
      <About/>
      <Noticias />
      <Antfo />
      <Footer/>
    </div>
  );
};

export default LandingPage;
