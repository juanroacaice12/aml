import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const newsData = [
  { 
    title: 'Innovaciones en Medidores de Agua Inteligentes para 2024', 
    description: 'Las nuevas tecnologías en medidores de agua inteligentes están transformando la gestión del recurso hídrico. Los avances incluyen mayor precisión, automatización y capacidades de detección de fugas.', 
    date: '2024-09-01',
    image: 'src/assets/innovacion.png' // URL de ejemplo
  },
  { 
    title: 'Impacto de los Medidores Inteligentes en la Reducción de Costos Operativos', 
    description: 'Empresas como Global Omnium e Idrica han implementado medidores inteligentes, logrando una reducción significativa en los costos operativos y mejorando la eficiencia en la gestión del agua.',
    date: '2024-09-02',
    image: 'src/assets/Costos.jpg'
  },
  { 
    title: 'Cómo los Medidores de Agua Inteligentes Promueven el Uso Responsable del Agua', 
    description: 'Los medidores inteligentes no solo optimizan el uso del agua, sino que también fomentan un uso más responsable al proporcionar datos en tiempo real a los consumidores.',
    date: '2024-09-03',
    image: 'src/assets/conciencia.jpg'
  },
  { 
    title: 'Tendencias en la Digitalización del Sector Hídrico', 
    description: 'La digitalización en la gestión del agua, a través de medidores inteligentes y tecnologías emergentes, está cambiando la forma en que se supervisan y gestionan los recursos hídricos.', 
    date: '2024-09-04',
    image: 'src/assets/digitalizacion.jpg' // URL de ejemplo
  },
  // Agrega más noticias aquí
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  centerMode: true,
  centerPadding: '0',
};

export default function NewsCarousel() {
  return (
    <section id="noticias">
    <div className='news-carousel-container w-full max-w-screen-xl mx-auto py-8 px-4 bg-[#fff] mb-20'>
      <h1 className='text-center text-3xl font-bold text-[#000] mb-20'>Noticias</h1>
      <Slider {...settings} className='relative'>
        {newsData.map((item, index) => (
          <div key={index} className='news-item p-4 bg-[#f9f9f9] border border-gray-200 rounded-lg shadow-lg text-center'>
            <img 
              src={item.image} 
              alt={item.title} 
              className='w-full h-[200px] object-cover rounded-lg mb-4'
            />
            <h2 className='text-xl font-semibold text-[#000] mb-2'>{item.title}</h2>
            <p className='text-sm text-gray-600 mb-2'>{item.date}</p>
            <p className='text-base text-[#000]'>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}
