import Link from "next/link"

const InfoBackground = () => {

  const listadoCaracteristicas = [
    {
      id: 1,
      nombre: "Escritorio",
      desc: "Consiste en el fondo de la pantalla del monitor que es la base sobre la que el usuario puede ejecutar el sistema operativo, los programas y aplicaciones."
    },
    {
      id: 2,
      nombre: "Iconos",
      desc: "Consisten en pequeñas imágenes simbólicas de acceso directo a programas, archivos o carpetas, que se localizan en el escritorio. El tipo de ícono y su ubicación pueden ser personalizados por el usuario."
    },
    {
      id: 3,
      nombre: "Barra de tareas",
      desc: "Consiste en una barra ubicada en la parte inferior del escritorio que permite visualizar, mediante íconos, los programas, archivos o carpetas que se encuentran activos, para seleccionarlos de manera rápida."
    },
    {
      id: 4,
      nombre: "Boton de inicio",
      desc: "Consiste en un acceso al menú principal desplegable. El botón se encuentra ubicado en la parte inferior de la barra de tareas."
    },
    {
      id: 5,
      nombre: "Menu",
      desc: "Consiste en un panel o lista desplegable que se puede visualizar u ocultar desde el botón de inicio. Ofrece accesos directos a programas, a archivos y a determinadas funciones del equipo (como de mantenimiento del equipo o de dispositivos)."
    },
    {
      id: 6,
      nombre: "Escritorios múltiples",
      desc: "La posibilidad de contar con varios escritorios es una característica pedida por los usuarios de Windows durante años, provista de manera indirecta por la firma con una pequeña aplicación que debíamos descargar aparte, pero que nunca prestó una verdadera utilidad."
    },
    {
      id: 7,
      nombre: "Búsqueda de archivos",
      desc: "El Explorador de archivos es otro de los elementos de Windows 10 que incorpora algunos cambios, como la posibilidad de tener fácilmente a disposición los archivos y carpetas a las cuales accedemos con más frecuencia, lo que nos permite trabajar con un mayor grado de comodidad. "
    },
  ]

  return (
    <div className='bgColorContainer px-8'>
        <div className='container flex flex-col'>
            <h2 className='text-2xl text-green-500 font-bold'>Caracteristicas de Windows</h2>
            <ol className='mt-5 flex flex-col gap-2 pl-5'>
              {listadoCaracteristicas.slice(0, 5).map(caracteristica => (
                <li key={caracteristica.id} type='disc' className='text-white text-md text-justify'><span className='font-bold text-green-500'>{caracteristica.nombre}: </span>{caracteristica.desc}</li>
              ))} 
            </ol>
            <Link href={'/windows/caracteristicas'} className="text-center text-gray-400 text-sm mt-5 hover:text-gray-200 transition-colors">Ver mas caracteristicas</Link>
        </div>
    </div>
  )
}

export default InfoBackground
