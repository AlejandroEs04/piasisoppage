import Link from "next/link"


const Etiqueta = ({item}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
        <div 
            className={`bg-cover bg-center h-80 w-full md:h-full md:w-1/3 rounded-t-lg md:rounded-l-lg  `}
            style={{
              backgroundImage: `url(${item.imageUrl})`
            }}
        ></div>

        <div className="flex flex-col md:w-2/3">
          <div className="p-5 w-full">
            <h2 className="font-bold text-xl text-blue-900">{item.titulo}</h2>
              <p className="text-justify">{item.parrafo1}</p>
              <p className="text-justify">{item.parrafo2}</p>
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
    </div>
  )
}

export default Etiqueta