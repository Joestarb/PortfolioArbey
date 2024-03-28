import React from 'react'

const Navbar = () => {
    const handleNavLinkClick = (event, targetId) => {
        event.preventDefault();
    
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
        <div className='fixed w-full z-50  bg-[#282C33] '>

        <div className=' border-b  border-gray-400 flex justify-between items-center '>

            <div className=' z-50  py-3 px-10  font-semibold'>Arbey Dzib</div>
            <div className='flex gap-4 z-50 py-3 px-5'>
                <a href="#sobre-mi" onClick={(event) => handleNavLinkClick(event, 'sobre-mi')}>
                    <span className='text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#</span> Sobre Mí
                </a>
                <a href="#skills" onClick={(event) => handleNavLinkClick(event, 'skills')}>
                    <span className='text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#</span> Skills
                </a>
                <a href="#proyectos" onClick={(event) => handleNavLinkClick(event, 'proyectos')}>
                    <span className='text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#</span> Proyectos
                </a>
                <a href="#contacto" onClick={(event) => handleNavLinkClick(event, 'contacto')}>
                    <span className='text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#</span> Contacto
                </a>
            </div>


        </div>

        </div>

    )
}

export default Navbar