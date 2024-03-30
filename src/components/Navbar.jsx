import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = (event, targetId) => {
        event.preventDefault();
        setMenuOpen(false); // Cerrar el menú después de hacer clic en un enlace
        const navbarHeight = document.querySelector('.py-3').offsetHeight; // Altura de la barra de navegación
        const scrollOffset = 20; // Desplazamiento hacia arriba (ajusta según necesites)
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetOffset = targetElement.offsetTop - navbarHeight - scrollOffset;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    };

    return (
        <div className='fixed w-full z-50 bg-gray-800 '>

            <div className='border-b border-gray-400 sm:flex justify-between items-center'>

                <a href='header' onClick={(event) => handleNavLinkClick(event, 'header')} className='z-50 max-sm:hidden py-3 px-10 font-semibold'>Arbey Dzib</a>
                <div className='flex gap-4 z-50 py-3 px-5 justify-between'>
                    <a href='header' className=' sm:hidden' onClick={(event) => handleNavLinkClick(event, 'header')}>Arbey Dzib</a>
                    {/* Botón de menú de hamburguesa para móviles */}
                    <button className='block sm:hidden' onClick={toggleMenu}>
                        <svg className='h-6 w-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <path className={!menuOpen ? 'block' : 'hidden'} fillRule='evenodd' clipRule='evenodd' d='M2 5h20v2H2V5zm0 6h20v2H2v-2zm0 6h20v2H2v-2z'/>
                            <path className={menuOpen ? 'block' : 'hidden'} fillRule='evenodd' clipRule='evenodd' d='M24 13H0v-2h24v2zm0-6H0V5h24v2z'/>
                        </svg>
                    </button>

                    {/* Menú de navegación */}
                    <div className={`sm:flex ${menuOpen ? 'flex absolute  bg-[#282C33]  px-5 py-2 right-10 top-10' : 'hidden'} flex-col sm:flex-row gap-4  text-white  font-bold`}>
                        <a className='hover:text-[#C778DD] duration-300' href="#sobre-mi" onClick={(event) => handleNavLinkClick(event, 'sobre-mi')}>Sobre Mí</a>
                        <a className='hover:text-[#C778DD] duration-300' href="#skills" onClick={(event) => handleNavLinkClick(event, 'skills')}>Skills</a>
                        <a className='hover:text-[#C778DD] duration-300' href="#proyectos" onClick={(event) => handleNavLinkClick(event, 'proyectos')}>Proyectos</a>
                        <a className='hover:text-[#C778DD] duration-300' href="#contacto" onClick={(event) => handleNavLinkClick(event, 'contacto')}>Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
