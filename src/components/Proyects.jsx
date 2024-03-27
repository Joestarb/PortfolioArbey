import React from 'react';
import ProyectsContent from '../../ProyectsContent';

const Proyects = () => {
    return (
        <div>
            <div className="flex items-center text-3xl justify-center">
                <div className="w-[40%] border-t-2 border-[#C778DD] ml-4"></div>
                <span className="text-[#C778DD] font-bold ml-3" style={{ verticalAlign: 'middle' }}>#</span>
                <p className='poppins-regular'>Proyectos</p>
                <div className="w-[40%] border-t-2 border-[#C778DD] ml-4"></div>
            </div>
            <div className="container mx-auto  py-12 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ProyectsContent.map((project) => (
                    <div key={project.id} className=" bg-[#1b1d22] rounded-lg shadow-md overflow-hidden">
                        <img src={project.productImage} alt={project.projectName} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.projectName}</h3>
                            <p className="text-[#C778DD] mb-4">{project.projectDescription}</p>
                            <a href={project.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Proyects;
