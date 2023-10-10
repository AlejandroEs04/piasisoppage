import Link from "next/link"

const Referencia = ({ referencia }) => {

    return (
        <div className='flex flex-wrap mb-3'>
            <p>{referencia.autores ? referencia.autores : 'N.A.'}, </p>
            <p>({referencia.fecha ? referencia.fecha : 'N.A.'}). </p>
            <p>{referencia.titulo ? referencia.titulo : 'N.A.'}. </p>
            <Link href={referencia.link} className="text-blue-600 hover:text-blue-800 transition-colors">{referencia.link}. </Link>
        </div>
    )
}

export default Referencia
