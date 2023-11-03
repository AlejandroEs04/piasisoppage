import Image from "next/image"

const IndividuoContainer = ({nombre, correo, matricula, carrera, conclusion, groupConclusion}) => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-5 bg-gray-100 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all'>
            {!groupConclusion && (
                <div className='w-full md:w-1/5 flex justify-start md:justify-center'>
                    <Image src={`/img/${matricula}.jpg`} width={200} height={200} alt={`Imagen de ${nombre}`} className="h-auto w-40 md:w-40 rounded-full" />
                </div>
            )}

            <div className={`w-full ${groupConclusion ? 'md:w-full' : 'md:w-4/5'}`}>
                <div className='flex items-end gap-x-4 flex-wrap text-justify'>
                    <p className='text-md font-bold text-blue-600'>{nombre}</p>
                    <p className='font-bold text-md'>{correo}</p>
                    <p className='font-bold text-md'>{matricula}</p>
                    <p className='font-bold text-md'>{carrera}</p>
                </div>

                <div className="text-justify">
                    {groupConclusion && (
                        <h2 className="text-blue-600 font-bold text-2xl mb-2">Conclusion grupal</h2>
                    )}
                    <p className={`text-md text-justify ${groupConclusion && 'text-xl'}`}>{conclusion}</p>
                </div>
            </div>
        </div>
    )
}

export default IndividuoContainer
