import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de imágenes visibles en pantallas grandes
    slidesToScroll: 1,
    autoplay: true, // Activar el desplazamiento automático
    autoplaySpeed: 3000, // Tiempo en milisegundos (3 segundos entre cada pase)
    pauseOnHover: true, // Pausar el desplazamiento si el usuario pasa el mouse
    responsive: [
      {
        breakpoint: 1024, // Para tablets y pantallas más pequeñas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Para móviles en orientación vertical
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="productos" className="p-10 mb-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Nuestros Productos</h2>
      <Slider {...settings} className="relative">
        <div className="p-6 mx-4 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <img src="src/assets/ultrasonic6.png" alt="Micromedidor" className="mx-auto h-48 w-48 object-cover rounded-lg border border-gray-300 shadow-md" />
          <p className="text-center mt-4 text-lg font-semibold text-gray-800">MA401</p>
        </div>
        <div className="p-6 mx-4 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <img src="src/assets/ultrasonic5.png" alt="Macromedidor" className="mx-auto h-48 w-48 object-cover rounded-lg border border-gray-300 shadow-md" />
          <p className="text-center mt-4 text-lg font-semibold text-gray-800">U-LY 40</p>
        </div>
        <div className="p-6 mx-4 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <img src="src/assets/ultrasonico.png" alt="Smart Metering" className="mx-auto h-48 w-48 object-cover rounded-lg border border-gray-300 shadow-md" />
          <p className="text-center mt-4 text-lg font-semibold text-gray-800">Smart Metering</p>
        </div>
        <div className="p-6 mx-4 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <img src="src/assets/ultrasonic4.png" alt="Medidor Residencial" className="mx-auto h-48 w-48 object-cover rounded-lg border border-gray-300 shadow-md" />
          <p className="text-center mt-4 text-lg font-semibold text-gray-800">U-WR2</p>
        </div>
        <div className="p-6 mx-4 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <img src="src/assets/ultrasonico1.png" alt="Medidor Woltmann" className="mx-auto h-48 w-48 object-cover rounded-lg border border-gray-300 shadow-md" />
          <p className="text-center mt-4 text-lg font-semibold text-gray-800">Lorawan ultrasonic</p>
        </div>
        <div className="p-6 mx-4 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <img src="src/assets/ultrasonic3.png" alt="Medidor Comercial" className="mx-auto h-48 w-48 object-cover rounded-lg border border-gray-300 shadow-md" />
          <p className="text-center mt-4 text-lg font-semibold text-gray-800">UL-DW</p>
        </div>
      </Slider>
    </section>
  );
};

export default Products;
