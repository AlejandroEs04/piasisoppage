import Etiqueta from "@/components/Etiqueta"
import Image from "next/image"

export default function Home() {

  const listadoEtiquetas = [
    {
      id: 1,
      titulo: "¿Sabes que es Windows?", 
      parrafo1: "Windows es el sistema operativo mas usado de todo el mundo, es un sistema operativo con el que inevitablemente hemos estado en contacto o hemos convivido.",
      parrafo2: "Si quieres aprender un poco acerca de este sistema operativo, presiona el boton para saber mas", 
      link: "windows",
      imageUrl: "https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      titulo: "¿Quieres ver nuestros trabajos?", 
      parrafo1: "Nuestro equipo ha estado trabajando en diferentes tareas en el transcurso del semestre, los hemos corregido y subido para ser descargados",
      parrafo2: "Si quieres ver nuestros trabajos, presiona el boton.", 
      link: "fundamentales",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      titulo: "¿Quieres sabes sobre nosotros?", 
      parrafo1: "Conoce acerca de nuestro equipo, y nuestras conclusiones acerca del proyecto integrador de aprendizaje",
      parrafo2: "Oprime el boton para saber sobre nuestro equipo", 
      link: "nosotros",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1484&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <>
      <div className="w-full h-80">
        <Image src={'/build/img/fondoMain.jpg'} width={1500} height={1000} alt="Fondo Inicio" className="object-cover w-full h-80" />
      </div>
      <main className="container">
        <h1 className="text-center text-3xl font-black text-blue-800">Inicio</h1>
        <div className="flex flex-col gap-10 sm:flex-row mt-6">
          <div className="w-full sm:w-2/3 xl:w-4/6 flex flex-col gap-5">
            {listadoEtiquetas.map(item => (
              <Etiqueta 
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <div className="w-full sm:w-1/3 xl:w-2/6">
            <div className="bg-white p-5">
              <h3 className="text-blue-900 font-bold text-2xl">Conoce+</h3>
              <p className="text-justify">Queremos que conozcas mas acerca del sistema operativo mas usado de todo el mundo, junto sus caracteristicas y sus funciones, ademas de las razones por las cuales Windows es tan popular alrededor de todo el mundo.</p>
              <div className="flex justify-center my-10">
                <Image src={'/img/Windows_logo.png'} width={200} height={200} alt="Logo de Windows 11" />
              </div>
              <p className="text-justify">Puedes ingresar a alguno de nuestras secciones, puedes ver nuestros trabajos y ver informacion acerca de Windows</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
