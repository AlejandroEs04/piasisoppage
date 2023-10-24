import Image from "next/image"
import Funciones from "./Funciones"

const listadoFunciones = [
    {
        nombre: 'Administración de archivos y carpetas:',
        texto: 'El sistema operativo gestiona todos los recursos del ordenador, incluyendo el procesador, la memoria y los dispositivos de entrada y salida. Además, Windows cuenta con una amplia variedad de herramientas y programas integrados para realizar tareas como la gestión de archivos, la navegación por Internet y la edición de documentos.',
    },
    {
        nombre: 'Personalización:',
        texto: 'Puedes personalizar el fondo de pantalla, los iconos y la barra de tareas en Windows según tus preferencias personales. Para cambiar el fondo de pantalla, haz clic derecho en el escritorio, selecciona “Personalizar”, luego “Fondo” y selecciona la imagen que deseas usar.',
    },
    {
        nombre: 'Multitarea:',
        texto: 'Windows te permite realizar varias tareas simultáneamente. Puedes abrir varias ventanas y aplicaciones al mismo tiempo y alternar entre ellas usando la barra de tareas o los atajos de teclado, como “Alt + Tab”.',
    },
    {
        nombre: 'Mantenimiento del sistema::',
        texto: 'Windows incluye herramientas de mantenimiento del sistema para mantener tu computadora funcionando sin problemas. El “Panel de control” contiene herramientas para desinstalar programas, realizar copias de seguridad y restaurar el sistema a un estado anterior.',
    },
]

const InfoFunciones = () => {
  return (
    <div className='container'>
        <div className="bg-white p-8 rounded-md shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className='text-2xl font-bold text-amber-500'>¿Cómo funciona Windows?</h2>
            <p className='text-md'>El sistema operativo gestiona todos los recursos del ordenador, incluyendo el procesador, la memoria y los dispositivos de entrada y salida. Además, Windows cuenta con una amplia variedad de herramientas y programas integrados para realizar tareas como la gestión de archivos, la navegación por Internet y la edición de documentos.</p>
            <div className='mt-5 flex flex-col'>
                <h3 className='text-xl font-bold text-amber-500'>Funciones principales de Windows</h3>
                <ul className='ml-5 flex flex-col gap-2'>
                    {listadoFunciones?.map(funcion => (
                        <Funciones 
                            funcion={funcion}
                            key={funcion.nombre}
                        />
                    ))}
                </ul>                
            </div>
            <div className='flex flex-col items-center mt-5'>
                <Image src={'/img/windowsInicio.jpg'} alt='Imagen Inicio Windows' width={1200} height={1000} className='w-full md:w-1/2' />
                <p className='text-xs text-gray-700 mt-2' >Imagen 2. Inicio de windows, tambien se muestra la barra de tareas</p>
            </div>
        </div>
    </div>
  )
}

export default InfoFunciones