import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Quiénes somos',
      content: 'Somos una empresa dedicada a ofrecer soluciones innovadoras en tecnología y seguridad.',
      image: 'src/assets/image1.jpg',
    },
    {
      title: 'Qué hacemos',
      content: 'Proporcionamos servicios de consultoría y auditoría en ciberseguridad para proteger tu información.',
      image: 'src/assets/image2.jpg',
    },
    {
      title: 'Nuestro compromiso',
      content: 'Nos comprometemos a ofrecer servicios de la más alta calidad con un enfoque en la excelencia.',
      image: 'src/assets/image3.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia de diapositiva cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="p-8 bg-gradient-to-r from-blue-500 to-white">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Texto del Slide */}
        <div className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-lg shadow-lg mb-6 md:mb-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ease-in-out absolute inset-0 flex items-center justify-center p-6 bg-gray-100 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="text-center max-w-2xl">
                <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                <p>{slide.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen del Slide */}
        <div className="w-full md:w-1/2 h-96 flex items-center justify-center">
          <img
            src={slides[currentSlide].image}
            alt="Imagen descriptiva"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
