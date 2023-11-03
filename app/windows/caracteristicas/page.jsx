import Image from "next/image"
import Link from "next/link"
import { listadoCaracteristicas } from "@/data/data"

export const metadata = {
    title: 'Windows - Caracteristicas',
    description: 'Informacion relevante de Windows',
}

const CaracteristicasPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-green-700 text-center uppercase">Características de Windows</h2>
        <p className="text-lg text-center">Descubre las caracteristicas mas importantes de Windows</p>
        <Link href={'/windows'} className="text-green-600 font-bold hover:text-green-700 transition-colors mt-4 uppercase">Volver a ver acerca de Windows</Link>
      </div>
      <div className="gap-x-10 gap-y-4 mt-5 p-5 bg-white rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {listadoCaracteristicas.map(caracteristica => (
          <div key={caracteristica.id} className="flex flex-col justify-between border-b border-b-gray-400 pb-4">
            <div>
              <h3 className="text-xl font-bold text-green-600">{caracteristica.nombre}</h3>
              <p className="text-lg text-justify">{caracteristica.desc}</p>
            </div>
            {caracteristica.imageURL && (
              <div className="flex justify-start mt-2">
                <Image 
                  src={`/build/img/${caracteristica.imageURL}`} 
                  alt={`Imagen de ${caracteristica.nombre}`} 
                  width={500} height={450} 
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Link href={'/windows'} className="text-white px-2 py-1 rounded-md bg-green-600 font-bold hover:bg-green-700 transition-colors mt-5 uppercase">Volver a ver acerca de Windows</Link>
      </div>
    </div>
  )
}

export default CaracteristicasPage
