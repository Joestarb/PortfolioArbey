import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xpzgpagp");
    if (state.succeeded) {
        return <div>
            <div className="flex items-center text-3xl justify-center">
                <div className="  w-[40%] border-t-2 border-[#C778DD] ml-4"></div>

                <span className="text-[#C778DD] font-bold ml-3" style={{ verticalAlign: 'middle' }}>#
                </span>
                <p className=' poppins-regular'>Contáctame</p>
                <div className="  w-[40%] border-t-2 border-[#C778DD] ml-4"></div>

            </div>
            <div  className=' h-96 flex items-center justify-center'>
                <p className=' text-4xl text-[#C778DD]'>
                    El mensaje fue enviado con éxito!
                </p>

            </div>
        </div>;
    }

    return (
        <div>
            <div className="flex items-center text-3xl justify-center">
                <div className="  w-[40%] border-t-2 border-[#C778DD] ml-4"></div>

                <span className="text-[#C778DD] font-bold ml-3" style={{ verticalAlign: 'middle' }}>#
                </span>
                <p className=' poppins-regular'>Contáctame</p>
                <div className="  w-[40%] border-t-2 border-[#C778DD] ml-4"></div>

            </div>
            <div className=' py-12'>
                <form onSubmit={handleSubmit} className='max-w-md mx-auto '>
                    <div className="mb-4">
                        <label htmlFor="email" className="block  text-sm font-bold mb-2">Correo electrónico</label>
                        <input
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none text-black focus:border-purple-500"
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block  text-sm font-bold mb-2">Mensaje</label>
                        <textarea
                            className="border text-black border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                            id="message"
                            name="message"
                            rows="4"
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button
                        className="bg-purple-500 w-full text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-purple-600"
                        type="submit" disabled={state.submitting}>
                        Enviar
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact