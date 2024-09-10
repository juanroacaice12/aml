import React from 'react';

export default function Main() {
  return (
    <div className='main-container w-full max-w-[1440px] h-auto bg-white relative overflow-hidden mx-auto py-10'>
      
      {/* Contenedor con degradado negro a gris, borde y hover */}
      <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto bg-gradient-to-r from-black to-gray-700 p-8 rounded-xl border border-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out mb-16'>
        
        {/* Contenido de texto */}
        <div className='w-full text-white text-center mb-6'>
          <span className="block font-inter text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight">
            ¿Quiénes somos?
          </span>
          <span className="block font-inter text-[16px] md:text-[18px] leading-relaxed mt-4">
            En Amliken, nos dedicamos a ofrecer soluciones avanzadas en medición y control de recursos como energía y agua. 
            Con años de experiencia y un enfoque en la innovación, ayudamos a nuestros clientes a optimizar sus procesos de manera 
            eficiente y sostenible. Nuestro compromiso es la precisión y fiabilidad en cada uno de nuestros productos.
          </span>
        </div>
        
        {/* Logo */}
        <div className='flex justify-center'>
          <img 
            src='src/assets/AMLIKEN lgo.png' // Cambia por la ruta de tu logo
            alt='Logo de la empresa'
            className='w-[100px] h-auto md:w-[150px]' 
          />
        </div>
      </div>

    </div>
  );
}
