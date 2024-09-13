import React from 'react';
import backgroundImage from '../assets/agua back.jpg';

export default function Main() {
  const handleSendClick = () => {
    // Redirigir a WeChat con el ID proporcionado
    window.location.href = 'weixin://dl/chat?hzlitai';
  };

  return (
    <section id="contacto">
      <div className='relative overflow-hidden mx-auto my-0'>
        {/* Fondo con imagen difusa */}
        <div
          className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat filter blur-[4px]'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Contenedor principal */}
        <div className='relative w-full max-w-[1440px] h-[687px] mx-auto flex flex-col items-center justify-center'>
          <div className='w-full max-w-[611px] h-auto bg-[#fff] rounded-[15px] p-6 flex flex-col items-center'>
            <div className='w-full max-w-[469px] flex flex-col gap-[16px] items-center'>
              <span className="text-[56px] font-bold text-[#333333] text-center">
                ¿Aún tienes preguntas?
              </span>
              <span className="text-[18px] font-normal text-[rgba(51,51,51,0.8)] text-center">
                Puedes comunicarte con nosotros mediante WeChat para simplificar tus necesidades, amliken está listo para ayudarte.
              </span>
            </div>
            <button
              onClick={handleSendClick}
              className='mt-[37px] bg-[#4762ff] text-[#fff] font-semibold text-[18px] py-[22px] px-[30px] rounded-[8px] shadow-lg'
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

