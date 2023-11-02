import Image from "next/image"
import logo from '../public/img/Windows_logo.png'

const InfoContainer = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start" id="queEsWindows">
            <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-bold text-blue-700 pb-2 border-b border-b-blue-600">¿Qué es Windows?</h2>
                <p className="text-md mt-2">Windows es un sistema operativo desarrollado por la compañía Microsoft. Consiste en un software conformado por un conjunto de programas que permiten gestionar y controlar el funcionamiento de las partes de un ordenador, como la memoria, el disco de almacenamiento y los dispositivos periféricos, y la ejecución de otros programas y aplicaciones.</p>

                <p className="text-md mt-5">La palabra Windows, que proviene del inglés y significa ventanas, alude a la estructura del software que permite visualizar múltiples contenidos (como programas y archivos) organizados en compartimentos o ventanas diferentes.</p>
            </div>

            <div className="w-full md:w-1/4 flex flex-col items-center">
                <Image src={logo} width={500} height={500} alt="Imagen Windows" className="h-auto w-36 md:w-full md:px-5" /> 
                <p className='text-xs text-gray-700 mt-2' >Imagen 1. Logo de Windows</p>
            </div>
        </div>
    )
}

export default InfoContainer
