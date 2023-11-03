import ListadoReferencias from '@/components/ListadoReferencias'
import InfoBackground from '../../components/InfoBackground'
import InfoWindows from '../../components/InfoWindows'
import InfoFunciones from '@/components/InfoFunciones'
import InfoVersiones from '@/components/InfoVersiones'

export const metadata = {
    title: 'Windows',
    description: 'Informacion relevante de Windows',
}

const WindowsPage = () => {
    return (
        <main className='flex flex-col justify-center'>
            <div className='container shadow-lg'>
                <div className='text-justify px-8'>
                    <h1 className='text-3xl font-bold text-blue-600 text-center uppercase'>Windows</h1>
                    <p className='text-lg mt-2 text-justify font-medium'>Windows es el sistema operativo mas utilizado en la actualidad, este maneja un sin fin de funciones, nos ayuda en facilitar nuestro dia a dia, pero, ¿qué tanto conocemos de esta herramienta?</p>
                </div>

                <div className='bg-white rounded-md shadow-lg mt-5 px-8 py-4 flex flex-col'>
                    <h3 className='font-bold text-2xl'>Indice</h3>
                    <a href='/windows#queEsWindows' className='text-lg font-medium text-blue-500 hover:text-blue-700 transition-colors'>¿Qué es Windows?</a>
                    <a href='/windows#caracteristicasWindows' className='text-lg font-medium text-blue-500 hover:text-blue-700 transition-colors'>Características de Windows</a>
                    <a href='/windows#comoFuncionaWindows' className='text-lg font-medium text-blue-500 hover:text-blue-700 transition-colors'>¿Cómo funciona Windows?</a>
                    <a href='/windows#versionesWindows' className='text-lg font-medium text-blue-500 hover:text-blue-700 transition-colors'>Versiones de Windows</a>
                    <a href='/windows#referencias' className='text-lg font-medium text-blue-500 hover:text-blue-700 transition-colors mt-4'>Referencias</a>
                </div>

                <div className='mt-10 bg-white p-8 rounded-md shadow-lg hover:shadow-2xl transition-shadow' id='queEsWindows'>
                    <InfoWindows />
                </div>
            </div>
        
            <div id='caracteristicasWindows'>
                <InfoBackground />
            </div>
            
            <div id='comoFuncionaWindows'>
                <InfoFunciones />
            </div>
            
            <div id='versionesWindows'>
                <InfoVersiones />
            </div>

            <div className='container' id='referencias'>
                <h3 className='text-red-600 font-bold text-2xl'>Referencias</h3>
                <ListadoReferencias />
            </div>
        </main>
    )
}

export default WindowsPage
