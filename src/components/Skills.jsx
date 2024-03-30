import React from 'react';
import { FaCss3Alt, FaGithub, FaHtml5, FaLaravel, FaNode, FaPhp, FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiFastapi, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import python from '../assets/python.png'
import { FaReact } from "react-icons/fa";

const Skills = () => {
    return (
        <div className=' relative block' id='skills'>


            <div className="flex items-center text-3xl justify-center">
                <div className="  w-[50%] border-t-2 border-[#C778DD] ml-4"></div>
                <span className="text-[#C778DD] font-bold ml-3" style={{ verticalAlign: 'middle' }}>#
                </span>
                <p className=' poppins-regular'>Skills</p>
                <div className="  w-[50%] border-t-2 border-[#C778DD] ml-4"></div>
            </div>
            <p className=' text-center'>Tecnologías con las que desarrollo habitualmente</p>
            <section className='grid grid-cols-4   max-sm:grid-cols-3 text-7xl gap-4 py-12'>
                <IoLogoJavascript className=' hover:scale-110   duration-200  mx-auto text-[#eaff00]' />
                <FaHtml5 className=' hover:scale-110   duration-200  mx-auto text-[#fc490b]' />
                <FaCss3Alt className=' hover:scale-110   duration-200  mx-auto  text-[#2196f3]' />
                <FaReact className=' hover:scale-110   duration-200  mx-auto text-[#38bdf8]' />
                <SiTailwindcss className=' hover:scale-110   duration-200  mx-auto text-[#38bdf8]' />
                <FaLaravel className=' hover:scale-110   duration-200  mx-auto text-[#f9322c]' />
                <SiFastapi className=' hover:scale-110   duration-200  mx-auto text-[#009485]' />
                <FaNode className=' hover:scale-110   duration-200  mx-auto  text-[#8ac400]' />
                <FaGitAlt className=' hover:scale-110   duration-200  mx-auto text-[#ff5117] ' />
                <FaGithub className=' hover:scale-110   duration-200  mx-auto ' />
                <GrMysql className=' hover:scale-110   duration-200  mx-auto text-[#38bdf8]' />
                <SiMongodb className=' hover:scale-110   duration-200  mx-auto text-green-600' />
                <IoLogoFirebase className=' hover:scale-110   duration-200  mx-auto text-yellow-400' />
                <SiRedux className=' hover:scale-110   duration-200  mx-auto text-[#7749bd]' />
                <FaPhp className=' hover:scale-110   duration-200  mx-auto text-[#777bb3]' />
                <div className=' hover:scale-110   duration-200 flex justify-center items-center'>
                    <img src={python} alt="" className=' hover:scale-110   duration-200 w-[4.4rem]' />
                </div>
            </section>
        </div>
    )
}

export default Skills