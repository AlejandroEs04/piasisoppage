import ListadoReferencias from '@/components/ListadoReferencias'
import InfoBackground from '../../components/InfoBackground'
import InfoWindows from '../../components/InfoWindows'
import Image from 'next/image'
import InfoFunciones from '@/components/InfoFunciones'
import ListadoVersiones from '@/components/ListadoVersiones'
import InfoVersiones from '@/components/InfoVersiones'

export const metadata = {
    title: 'Windows',
    description: 'Informacion relevante de Windows',
}

const WindowsPage = () => {
    return (
        <main className='flex flex-col justify-center'>
            <div className='container shadow-lg'>
                <div className='text-justify'>
                    <h1 className='text-3xl font-bold text-blue-600 text-center'>Windows</h1>
                    <p className='text-md mt-2 text-justify'>Windows es el sistema operativo mas utilizado en la actualidad, este maneja un sin fin de funciones, nos ayuda en facilitar nuestro dia a dia, pero, ¿qué tanto conocemos de esta herramienta?</p>
                </div>

                <div className='mt-10 bg-white p-8 rounded-md shadow-lg hover:shadow-2xl transition-shadow'>
                    <InfoWindows />
                </div>
            </div>
        
            <InfoBackground />
            
            <InfoFunciones />

            <InfoVersiones />

            <div className='container'>
                <h3 className='text-red-600 font-bold text-2xl'>Referencias</h3>
                <ListadoReferencias />
            </div>
        </main>
    )
}

export default WindowsPage
