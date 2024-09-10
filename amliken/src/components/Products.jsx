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
    <section className="p-8">
      <h2 className="text-3xl mb-4">Productos</h2>
      <Slider {...settings}>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/micromedidor.jpg" alt="Micromedidor" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Micromedidores</p>
        </div>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/macro.png" alt="Macromedidor" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Macromedidores</p>
        </div>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/accesorios.png" alt="Accesorios" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Accesorios</p>
        </div>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/ultrasonico.jpg" alt="Smart Metering" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Smart Metering</p>
        </div>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/Residencial.jpg" alt="Medidor Residencial" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Medidores Residenciales</p>
        </div>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/woltmman.png" alt="Medidor Woltmann" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Medidores Woltmann</p>
        </div>
        <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg">
          <img src="src/assets/medicome.jpg" alt="Medidor Comercial" className="mx-auto h-48 w-48 object-cover" />
          <p className="text-center mt-2">Medidores Comerciales</p>
        </div>
      </Slider>
    </section>
  );
};

export default Products;
