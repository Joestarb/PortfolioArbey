import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-4 border-t-2 bg-gray-800 text-white text-center">
            <div className="flex justify-center space-x-4">
                <a className="hover:text-[#6e43d1] duration-300" href="https://github.com/Joestarb">
                    <FaGithub />
                </a>
                <a className="hover:text-[#6e43d1] duration-300" href="https://www.instagram.com/__arbey/">
                    <FaLinkedin />
                </a>
                <a className="hover:text-[#6e43d1] duration-300" href="https://www.linkedin.com/in/arbey-alexis-dzib-hernandez-15956a255/">
                    <FaInstagram />
                </a>
            </div>
            <p className="mt-2">© 2024 Arbey Dzib. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
