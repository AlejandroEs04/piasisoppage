import Image from "next/image"

export const metadata = {
  title: 'Fundamentales',
  description: 'Fundamentales realizadas por el equipo',
}

const FundamentalesPage = () => {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold text-blue-600 text-center uppercase'>Fundamentales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-5 mt-5">
        <div className='mt-2 px-2 flex justify-center bg-white py-5 rounded-xl shadow-xl'>
          <a href={'build/files/'} download>
            <h3 className='text-xl font-bold text-blue-600 transition-all'>Actividad Fundamental 1</h3>
            <p>Investigacion de sistemas operativos y sus tipos</p>
            <div className="flex justify-center mt-3">
              <Image 
                src={'/build/img/fundamental1.png'} 
                alt="Imagen Fundamental 1" 
                height={400} width={200} 
                className="w-1/2 h-auto shadow"  
              />
            </div>
          </a>
        </div>

        <div className='mt-2 px-2 flex justify-center bg-white py-5 rounded-xl shadow-xl'>
          <a href={'build/files/'} download>
            <h3 className='text-xl font-bold text-blue-600 transition-all'>Evolucion de los sistemas operativos</h3>
            <p>Linea del tiempo de la evolucion de los sistemas operativos</p>
          </a>
        </div>

        <div className='mt-2 px-2 flex justify-center bg-white py-5 rounded-xl shadow-xl'>
          <a href={'build/files/AF2-multitarea-controlDeConcurrencia 1.pdf'} download>
            <h3 className='text-xl font-bold text-blue-600 transition-all'>Actividad Fundamental 2</h3>
            <p>Investigacion de control de concurrencia y la multitarea</p>
            <div className="flex justify-center mt-3">
              <Image 
                src={'/build/img/fundamental2.png'} 
                alt="Imagen Fundamental 2" 
                height={400} width={200} 
                className="w-1/2 h-auto shadow"  
              />
            </div>
          </a>
        </div>

        <div className='mt-2 px-2 flex justify-center bg-white py-5 rounded-xl shadow-xl'>
          <a href={'build/files/SIOP_AF3_006 (1).pdf'} download>
            <h3 className='text-xl font-bold text-blue-600 transition-all'>Actividad Fundamental 3</h3>
            <p>Investigacion sobre almacenaje, memoria y archivos</p>
            <div className="flex justify-center mt-3">
              <Image 
                src={'/build/img/fundamental3.png'} 
                alt="Imagen Fundamental 3" 
                height={400} width={200} 
                className="w-1/2 h-auto shadow"  
              />
            </div>
          </a>
        </div>

        <div className='mt-2 px-2 flex justify-center bg-white py-5 rounded-xl shadow-xl'>
          <a href={'build/files/SIOP_AF3_006 (1).pdf'} download>
            <h3 className='text-xl font-bold text-blue-600 transition-all'>Actividad Fundamental 4</h3>
            <p>Investigacion sobre almacenaje, memoria y archivos</p>
            <div className="flex justify-center mt-3">
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FundamentalesPage
