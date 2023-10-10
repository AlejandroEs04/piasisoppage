import React from 'react'

const Funciones = ({funcion}) => {
  return (
    <li type="circle">
        <p className='text-md font-bold'>{funcion.nombre} </p>
        <p className='text-md'>{funcion.texto} </p>
    </li>
  )
}

export default Funciones