import { listadoVersiones } from "@/data/data"
import Version from "./Version"


const ListadoVersiones = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {listadoVersiones?.map(version => (
            <Version 
                version={version}
                key={version.nombre}
            />
        ))}
     </div>
  )
}

export default ListadoVersiones