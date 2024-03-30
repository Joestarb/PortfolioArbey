import React from 'react'
import pic from '../assets/porfilepic.jpg'
import asset1 from '../assets/asset1.png'
import asset2 from '../assets/asset2.png'
import asset3 from '../assets/asset3.png'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <div id='header' className='h-screen flex justify-center items-center sm:flex-row  flex-col '>
            <section className=''>
                <img src={asset3} alt="img" className='  max-sm:hidden absolute bottom-0 -left-24 w-40 z-0' />
                <img src={asset1} alt="img" className='absolute sm:hidden right-0  top-5 z-10' />
                <img src={asset1} alt="img" className='absolute sm:hidden left-0 bottom-0 z-10' />

                <img src={asset1} alt="img" className='absolute left-0 top-5 z-10' />
                <img src={asset1} alt="img" className='absolute right-0 bottom-0 z-10' />
                <img src={asset3} alt="img" className=' max-sm:hidden absolute top-0 right-0  w-64 z-0' />
            </section>

            <div className='sm:w-3/5 z-40 mb-7'>
                <p className="sm:text-7xl text-3xl z-40">Bienvenido, <br /> Soy Arbey Dzib  <br />
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
                <div className=' text-4xl sm:text-6xl flex     max-sm:justify-between'>
                    <a className='hover:text-[#6e43d1]  duration-300' href="https://github.com/Joestarb">
                        <FaGithub />
                    </a>

                    <a className='hover:text-[#6e43d1]  duration-300' href="https://www.instagram.com/__arbey/">
                        <FaLinkedin />
                    </a>

                    <a className='hover:text-[#6e43d1]  duration-300' href="https://www.linkedin.com/in/arbey-alexis-dzib-hernandez-15956a255/">
                        <FaInstagram />
                    </a>

                </div>

            </div>

            <div className='sm:w-2/5 flex justify-center items-center'>
                <img src={pic} alt="pic" className='border-[#C778DD] rounded-full z-40 p-4 border-2' />
            </div>


        </div>
    )
}

export default Header