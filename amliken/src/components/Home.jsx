import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros">
    <div className="about-container w-full max-w-screen-lg mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Columna izquierda con el slogan y el botón */}
      <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-[#333333] mb-4">
          Amliken
        </h2>
        <p className="text-lg text-[#666666] mb-6">
          "Innovación en medidores de agua para un futuro más sostenible."
        </p>
        <a 
          href="weixin://dl/chat?hzlitai" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Contacto
        </a>
      </div>

      {/* Columna derecha con las imágenes en forma de cuadrado */}
      <div className="md:w-1/2 grid grid-cols-3 grid-rows-3 gap-4 relative">
        {/* Imágenes en la cuadrícula */}
        <img 
          src="src/assets/ultrasonic6.png" 
          alt="Medidor 1" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/ultrasonic5.png" 
          alt="Medidor 2" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/ultrasonico.png" 
          alt="Medidor 3" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/ultrasonic4.png" 
          alt="Medidor 4" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/AMLIKEN lgo.png" 
          alt="Medidor 5" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/ultrasonic3.png" 
          alt="Medidor 6" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/ultrasonico1.png" 
          alt="Medidor 7" 
          className="w-full h-auto object-cover"
        />
        <img 
          src="src/assets/ultrasonic5.png" 
          alt="Medidor 8" 
          className="w-full h-auto object-cover"
        />
        {/* Imagen central opcional */}
        <img 
          src="src/assets/ultrasonic6.png" 
          alt="Medidor 9" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    </section>
  );
};

export default AboutSection