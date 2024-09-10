import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const newsData = [
  { 
    title: 'Noticia 1', 
    description: 'Descripción de la noticia 1', 
    date: '2024-09-01',
    image: 'https://via.placeholder.com/300x200?text=Noticia+1' // URL de ejemplo
  },
  { 
    title: 'Noticia 2', 
    description: 'Descripción de la noticia 2', 
    date: '2024-09-02',
    image: 'https://via.placeholder.com/300x200?text=Noticia+2' // URL de ejemplo
  },
  { 
    title: 'Noticia 3', 
    description: 'Descripción de la noticia 3', 
    date: '2024-09-03',
    image: 'https://via.placeholder.com/300x200?text=Noticia+3' // URL de ejemplo
  },
  { 
    title: 'Noticia 4', 
    description: 'Descripción de la noticia 4', 
    date: '2024-09-04',
    image: 'https://via.placeholder.com/300x200?text=Noticia+4' // URL de ejemplo
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
  );
}
