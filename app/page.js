import Link from "next/link"

export default function Home() {
  return (
    <main className="container">
      <h1>Inicio</h1>
      <div className="flex flex-row gap-10">
        <div className="w-full md:w-2/3 px-10 py-5">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-cover bg-center h-80 rounded-t-lg bg-[url('https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
            <div className="p-5 w-full">
              <h2 className="font-bold text-xl text-blue-900">Que es Windows?</h2>
              <p>Windows es el sistema operativo mas utilizado en todo el mundo</p>
            </div>

            <div className="flex justify-center">
              <Link 
                href={'/'}
                className="bg-black text-white my-5 px-5 py-2 rounded-md"
              >
                Ver mas
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div>
            <h3>Hoy es un dia para ser feli</h3>
          </div>
        </div>
      </div>
    </main>
  )
}
