import Link from "next/link"


const Etiqueta = ({item}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md">
        <div 
            className={`bg-cover bg-center h-80 rounded-t-lg`}
        ></div>
        <div className="p-5 w-full">
          <h2 className="font-bold text-xl text-blue-900">{item.titulo}</h2>
            <p>{item.parrafo1}</p>
          <p>{item.parrafo2}</p>
        </div>

        <div className="flex justify-center">
            <Link 
                href={`/${item.link}`}
                className="bg-black text-white my-5 px-5 py-2 rounded-md hover:bg-gray-800 transition-colors font-bold"
            >
                Ver mas
            </Link>
        </div>
    </div>
  )
}

export default Etiqueta