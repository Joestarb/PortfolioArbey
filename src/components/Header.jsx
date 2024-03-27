import React from 'react'
import pic from '../assets/porfilepic.jpg'
import asset1 from '../assets/asset1.png'
import asset2 from '../assets/asset2.png'
import asset3 from '../assets/asset3.png'
const Header = () => {
    return (
        <div className='h-screen flex justify-center items-center flex-row '>
        <div className=''>
            <img src={asset3} alt="img" className='absolute bottom-0 -left-24 w-40 z-0' />
            <img src={asset1} alt="img" className='absolute left-0 top-5 z-10' />
            <img src={asset1} alt="img" className='absolute right-0 bottom-0 z-10' />
            <img src={asset3} alt="img" className='absolute top-0 right-0  w-64 z-0' />
        </div>

        <div className='w-3/5 z-40'>
            <p className="text-7xl z-40">Bienvenido, <br /> Soy Arbey Dzib  <br />
                <span className='font-semibold relative text-black '>
                    Desarrollador Web
                    <span className="absolute top-0 left-0 w-full h-full text-[#6e43d1] opacity-0 animate-pulse">
                        Desarrollador Web
                    </span>
                    <span className="absolute top-0 left-0 w-full h-full text-[#C778DD] animate-pulse">
                        Desarrollador Web
                    </span>
                </span>
            </p>
        </div>

        <div className='w-2/5 flex justify-center items-center'>
            <img src={pic} alt="pic" className='border-[#C778DD] rounded-full z-40 p-4 border-2' />
        </div>
    </div>
    )
}

export default Header