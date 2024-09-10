import React from 'react';
import { TbBrandWechat } from "react-icons/tb";

// Reemplaza las rutas con las adecuadas en tu proyecto
const images = {
  headerImage: '../assets/images/0d2de140788a8bc3357d7e0afb1c7465341735fe.png',
  companyLogo: '../assets/images/company-logo.png', // Reemplaza con la ruta de tu logo
  icon1: '../assets/images/3742f0e8-46a8-4330-9849-d6dcb4301271.png',
  icon2: '../assets/images/038989a4-fc0b-4e0c-a187-214361898438.png',
  separator: '../assets/images/4ef68eb8-862f-4865-9adb-6604bf464f63.png',
  background: '../assets/images/9323d94d-415f-4e8e-9086-aed31f4e501b.png',
};

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto py-8 px-4'>
        <div className='flex flex-wrap justify-between items-start'>
          <div className='w-full sm:w-1/2 md:w-1/4 mb-6'>
            <h2 className='text-xl font-medium mb-4'>Empresa</h2>
            <ul>
              <li><a href="#" className='block py-1 text-sm'>Sobre Nosotros</a></li>
              <li><a href="#" className='block py-1 text-sm'>Servicios</a></li>
              <li><a href="#" className='block py-1 text-sm'>Por qué elegirnos?</a></li>
              <li><a href="#" className='block py-1 text-sm'>Contacto</a></li>
            </ul>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4 mb-6'>
            <h2 className='text-xl font-medium mb-4'>Contacto</h2>
            <div className='flex items-center mt-4'>
              <a href="weixin://dl/chat?token=hzlitai" className='mr-4'>
                <TbBrandWechat className='text-2xl' />
              </a>
            </div>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/4 mb-6 flex justify-center items-center'>
            <img src= "src/assets/AMLIKEN lgo.png" alt="Company Logo" className='w-40 h-auto' />
          </div>
        </div>
      </div>
      <div className='bg-black text-center py-4'>
        <p className='text-sm'>
        Copyright © Amliken 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
