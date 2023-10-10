import React from 'react'

const InfoBackground = () => {
  return (
    <div className='bgColorContainer'>
        <div className='container'>
            <h2 className='text-2xl text-green-500 font-bold'>Caracteristicas de Windows</h2>
            <ol className='mt-5 flex flex-col gap-2 pl-5'>
                <li type='disc' className='text-white text-md'><span className='font-bold text-green-500'>Escritorio: </span>Consiste en el fondo de la pantalla del monitor que es la base sobre la que el usuario puede ejecutar el sistema operativo, los programas y aplicaciones. </li>
                <li type='disc' className='text-white text-md'><span className='font-bold text-green-500'>Iconos: </span>Consisten en pequeñas imágenes simbólicas de acceso directo a programas, archivos o carpetas, que se localizan en el escritorio. El tipo de ícono y su ubicación pueden ser personalizados por el usuario. </li>
                <li type='disc' className='text-white text-md'><span className='font-bold text-green-500'>Barra de tareas: </span>Consiste en una barra ubicada en la parte inferior del escritorio que permite visualizar, mediante íconos, los programas, archivos o carpetas que se encuentran activos, para seleccionarlos de manera rápida.</li>
                <li type='disc' className='text-white text-md'><span className='font-bold text-green-500'>Boton de inicio: </span>Consiste en un acceso al menú principal desplegable. El botón se encuentra ubicado en la parte inferior de la barra de tareas.</li>
                <li type='disc' className='text-white text-md'><span className='font-bold text-green-500'>Menu: </span>Consiste en un panel o lista desplegable que se puede visualizar u ocultar desde el botón de inicio. Ofrece accesos directos a programas, a archivos y a determinadas funciones del equipo (como de mantenimiento del equipo o de dispositivos).</li>
            </ol>
        </div>
    </div>
  )
}

export default InfoBackground
