import React from 'react'

const AboutMe = () => {
    return (
        <div>
            <div className="flex items-center text-3xl justify-center">
            <div className="  w-[40%] border-t-2 border-[#C778DD] ml-4"></div>

                <span className="text-[#C778DD] font-bold ml-3" style={{ verticalAlign: 'middle' }}>#
                </span>
                <p className=' poppins-regular'>Sobre Mí</p>
                <div className="  w-[40%] border-t-2 border-[#C778DD] ml-4"></div>

            </div>
            <div  className=' py-12'>
                <p>Hola!</p>

                    <p>Soy estudiante de Tecnologías de la Información y Comunicación (TIC) con enfoque en Desarrollo de Software Multiplataforma.</p>
                    <p>Además de mi formación académica, tengo experiencia en el desarrollo web tanto del lado del cliente (Frontend) como del servidor (Backend).</p>
                    <br />
                    <p>Además, estoy interesado en explorar nuevas tecnologías y aprendizaje continuo para mantenerme actualizado en un campo tan dinámico y en constante evolución como lo es el desarrollo de software.</p>
                    
            </div>
        </div>
    )
}

export default AboutMe