import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-white p-6 text-black flex items-center justify-between shadow-md relative">
      <h1 className="text-4xl font-bold">AMLIKEN</h1>

      {/* Ícono de hamburguesa (visible solo en dispositivos pequeños) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menú de navegación para dispositivos medianos/grandes */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#inicio" className="hover:underline transition duration-300 ease-in-out">Inicio</a></li>
          <li><a href="#Nosotros" className="hover:underline transition duration-300 ease-in-out">Nosotros</a></li>
          <li><a href="#productos" className="hover:underline transition duration-300 ease-in-out">Productos</a></li>
          <li><a href="#servicios" className="hover:underline transition duration-300 ease-in-out">Servicios</a></li>
          <li><a href="#noticias" className="hover:underline transition duration-300 ease-in-out">Noticias</a></li>
          <li><a href="#contacto" className="hover:underline transition duration-300 ease-in-out">Contacto</a></li>
        </ul>
      </nav>

      {/* Menú desplegable para dispositivos pequeños */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col items-center space-y-4 p-4 text-lg font-medium">
            <li><a href="#inicio" className="hover:underline" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#nosotros" className="hover:underline" onClick={toggleMenu}>Nosotros</a></li>
            <li><a href="#productos" className="hover:underline" onClick={toggleMenu}>Productos</a></li>
            <li><a href="#servicios" className="hover:underline" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="#noticias" className="hover:underline" onClick={toggleMenu}>Noticias</a></li>
            <li><a href="#contacto" className="hover:underline" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
