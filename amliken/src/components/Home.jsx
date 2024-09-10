import React from 'react';
import backgroundImage from '../assets/agua back.jpg';

const Home = () => {
  return (
    <section className="p-8 text-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2 className="text-4xl mb-4 text-white">Bienvenidos a Amliken</h2>
      <p className="text-white">Su aliado en soluciones de medición y tecnología.</p>
    </section>
  );
};

export default Home;
