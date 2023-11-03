import Link from "next/link"
import { listadoCaracteristicas } from "@/data/data"

const InfoBackground = () => {

  return (
    <div className='bgColorContainer px-8'>
        <div className='container flex flex-col'>
            <h2 className='text-2xl text-green-500 font-bold'>Características de Windows</h2>
            <ol className='mt-5 flex flex-col gap-2 pl-5'>
              {listadoCaracteristicas.slice(0, 5).map(caracteristica => (
                <li key={caracteristica.id} type='disc' className='text-white text-md'><span className='font-bold text-green-500'>{caracteristica.nombre}: </span>{caracteristica.desc}</li>
              ))} 
            </ol>
            <Link href={'/windows/caracteristicas'} className="text-center text-green-500 text-md mt-5 hover:text-green-600 transition-colors">Ver todas las caracteristicas</Link>
        </div>
    </div>
  )
}

export default InfoBackground
