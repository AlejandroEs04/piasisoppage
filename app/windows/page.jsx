import ListadoReferencias from '@/components/ListadoReferencias'
import InfoBackground from '../../components/InfoBackground'
import InfoWindows from '../../components/InfoWindows'

export const metadata = {
    title: 'Windows',
    description: 'Informacion relevante de Windows',
}

const WindowsPage = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div className='container'>
                <div className='text-justify'>
                    <h1 className='text-3xl font-bold text-blue-600 text-center'>Windows</h1>
                    <p className='text-md mt-2'>Windows es el sistema operativo mas utilizado en la actualidad, este maneja un sin fin de funciones, nos ayuda en facilitar nuestro dia a dia, pero, ¿qué tanto conocemos de esta herramienta?</p>
                </div>

                <div className='mt-10'>
                    <InfoWindows />
                </div>
            </div>

            <div>
                <InfoBackground />
            </div>
            
        
            <div className='container'>
                <h2 className='text-2xl font-bold text-amber-500'>¿Cómo funciona Windows?</h2>
                <p className='text-md'>El sistema operativo gestiona todos los recursos del ordenador, incluyendo el procesador, la memoria y los dispositivos de entrada y salida. Además, Windows cuenta con una amplia variedad de herramientas y programas integrados para realizar tareas como la gestión de archivos, la navegación por Internet y la edición de documentos.</p>
                <div className='mt-5'>
                    <h3 className='text-xl font-bold text-amber-500'>Funciones principales de Windows</h3>
                    <ul className='ml-5'>
                        <li type="circle">
                            <p className='text-md font-bold'>Administración de archivos y carpetas: </p>
                            <p className='text-md'>Windows te permite organizar tus archivos y carpetas de manera fácil y eficiente. Para crear una nueva carpeta, haz clic derecho en cualquier lugar del escritorio o en cualquier ubicación dentro de una ventana abierta del explorador de archivos, selecciona “Nuevo” y luego “Carpeta”. Para copiar o mover archivos, selecciona los archivos a través del explorador de archivos, haz clic derecho y selecciona la opción correspondiente. </p>
                        </li>

                        <li type="circle">
                            <p className='text-md font-bold'>Personalización: </p>
                            <p className='text-md'>Puedes personalizar el fondo de pantalla, los iconos y la barra de tareas en Windows según tus preferencias personales. Para cambiar el fondo de pantalla, haz clic derecho en el escritorio, selecciona “Personalizar”, luego “Fondo” y selecciona la imagen que deseas usar.</p>
                        </li>

                        <li type="circle">
                            <p className='text-md font-bold'>Multitarea: </p>
                            <p className='text-md'>Windows te permite realizar varias tareas simultáneamente. Puedes abrir varias ventanas y aplicaciones al mismo tiempo y alternar entre ellas usando la barra de tareas o los atajos de teclado, como “Alt + Tab”. </p>
                        </li>

                        <li type="circle">
                            <p className='text-md font-bold'>Mantenimiento del sistema: </p>
                            <p className='text-md'>Windows incluye herramientas de mantenimiento del sistema para mantener tu computadora funcionando sin problemas. El “Panel de control” contiene herramientas para desinstalar programas, realizar copias de seguridad y restaurar el sistema a un estado anterior. </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='container'>
                <h3 className='text-red-600 font-bold text-2xl'>Referencias</h3>
                <ListadoReferencias />
            </div>
        </div>
    )
}

export default WindowsPage
