import React from 'react';
import Header from '../components/Header';
import Antfo from '../components/Antfo';
import Home from '../components/Home';
import About from '../components/About'; // Asegúrate de importar About correctamente
import Products from '../components/Products';
import Services from '../components/Services';
import Ubicacion from '../components/Ubicacion';
import Noticias from '../components/Noticias';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About /> {/* Usa el componente About */}
      <Products />
      <Services />
      <Ubicacion/>
      <Noticias />
      <Antfo />
      <Footer/>
    </div>
  );
};

export default LandingPage;
