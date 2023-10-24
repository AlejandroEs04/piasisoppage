import React from 'react'
import ListadoVersiones from './ListadoVersiones'

const InfoVersiones = () => {
  return (
    <div className='container p-8'>
        <h2 className='text-2xl font-bold text-red-500'>Historia de Windows</h2>
        <ListadoVersiones />
    </div>
  )
}

export default InfoVersiones