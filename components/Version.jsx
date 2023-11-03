import Image from "next/image"

const Version = ({ version }) => {
  return (
    <div className='px-5 py-2 items-center flex flex-col gap-5'>
        <div>
            <h3 className='text-xl font-bold text-red-700'>{version.nombre}</h3>
            <p className='text-md text-justify'>{version.texto}</p>
        </div>
        
        <div className="flex justify-center">
            <Image src={`/img/${version.imagen}`} alt={`Imagen ${version.nombre}`} width={500} height={350} className="w-52" />
        </div>
    </div>
  )
}

export default Version