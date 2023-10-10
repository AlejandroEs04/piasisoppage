import Link from "next/link"

const Footer = () => {
  return (
    <div className='bg-black grid grid-rows-2 md:grid-cols-2 container'>
        <div>
            <h2 className="text-white font-bold text-xl">Producto Integrador de Aprendisaje</h2>
            <p className="text-md text-blue-400">Elaborado por: <span className="font-bold">Equipo 2</span></p>

            <p className="text-white text-xs mt-5">Elaborado el: 07/10/2023</p>
            <p className="text-white text-xs">Ultima Actualizacion: 09/10/2023</p>
        </div>

        <nav className="flex flex-col text-start md:text-end">
            <Link href={'/'} className="text-white text-md mb-2" >Inicio</Link>
            <Link href={'/windows'} className="text-white text-md" >Windows</Link>
            <Link href={'/windows#queEsWindows'} className="text-sm text-gray-300" >¿Qué es Windows?</Link>
            <Link href={'/windows/caracteristicas'} className="text-sm text-gray-300" >Caracteristicas</Link>
            <Link href={'/windows#comoFuncionaWindows'} className="text-sm text-gray-300" >¿Cómo funciona Windows?</Link>
            <Link href={'/windows#funcionesPrincipalesWindows'} className="text-sm text-gray-300" >Funciones principales de Windows</Link>
            <Link href={'/windows#historiaWindows'} className="text-sm text-gray-300" >Historia de Windows</Link>
            <Link href={'/fundamentales'} className="text-white mt-2" >Fundamentales</Link>
            <Link href={'/nosotros'} className="text-white mt-2" >Nosotros</Link>
        </nav>
    </div>
  )
}

export default Footer