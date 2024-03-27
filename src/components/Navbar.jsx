import React from 'react'

const Navbar = () => {
    return (
        <div className=' border-b  border-gray-400 flex justify-between items-center '>

            <div className=' z-50  py-3 px-10  bg-[#282C33] font-semibold'>Joestarb</div>
            <div className='flex gap-4  z-50   bg-[#282C33]  py-3  px-5   '>
                <a href=""><span className=' z-50  text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#
                </span>Sobre Mí</a>
                <a href=""><span className=' z-50  text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#
                </span>Skils</a>
                <a href=""><span className=' z-50  text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#
                </span>Proyectos</a>
                <a href=""><span className=' z-50  text-[#C778DD] font-bold' style={{ verticalAlign: 'middle' }}>#
                </span>Contacto</a>
            </div>


        </div>
    )
}

export default Navbar