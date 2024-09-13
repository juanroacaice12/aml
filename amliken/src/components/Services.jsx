import React from 'react';

export default function Main() {
  return (
    <section id="servicios">
      <div className='w-full min-h-screen bg-[#fff] flex flex-col items-center py-10'>
        <h2 className='text-4xl font-bold text-[#333333] mb-8'>
          Servicios que brindamos
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {/* Control y Gestión Eficiente */}
          <div className='w-80 p-6 bg-[#f9f9f9] border border-[#ddd] rounded-lg shadow-md'>
            <div className='w-full h-48 overflow-hidden mb-4'>
              <img 
                src="src/assets/controlygestion.png" 
                alt="Control y Gestión Eficiente" 
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-xl font-bold mb-2'>Control y Gestión Eficiente</h3>
            <p className='text-gray-700'>
              Control y gestión eficiente del consumo energético mediante medidores inteligentes.
            </p>
          </div>

          {/* Validación Técnica */}
          <div className='w-80 p-6 bg-[#f9f9f9] border border-[#ddd] rounded-lg shadow-md'>
            <div className='w-full h-48 overflow-hidden mb-4'>
              <img 
                src="src/assets/valid tec.png" 
                alt="Validación Técnica" 
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-xl font-bold mb-2'>Validación Técnica</h3>
            <p className='text-gray-700'>
              Validación y verificación técnica de los medidores para garantizar su precisión.
            </p>
          </div>

          {/* Soporte Especializado */}
          <div className='w-80 p-6 bg-[#f9f9f9] border border-[#ddd] rounded-lg shadow-md'>
            <div className='w-full h-48 overflow-hidden mb-4'>
              <img 
                src="src/assets/AMLIKEN lgo.png" 
                alt="Soporte Especializado" 
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-xl font-bold mb-2'>Soporte Especializado</h3>
            <p className='text-gray-700'>
              Soporte especializado en la instalación y mantenimiento de los sistemas de medición.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
