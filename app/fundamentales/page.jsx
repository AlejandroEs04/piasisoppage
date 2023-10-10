import Link from "next/link"

export const metadata = {
  title: 'Fundamentales',
  description: 'Fundamentales realizadas por el equipo',
}

const FundamentalesPage = () => {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold text-blue-600'>Fundamentales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className='mt-2 px-2'>
          <Link href={'https://drive.google.com/file/d/1wXHTgGeMGbVxsWuFAuFEjiTc_3WFS6QH/view?usp=sharing'}>
            <h3 className='text-xl font-bold hover:text-blue-400 transition-all'>Actividad Fundamental 1</h3>
            <p>Investigacion de sistemas operativos y sus tipos</p>
          </Link>
        </div>

        <div className='mt-2 px-2'>
          <Link href={'https://drive.google.com/file/d/1PmOdCTnwPkHf1JZv9exfJOhs19IpleaM/view?usp=sharing'}>
            <h3 className='text-xl font-bold hover:text-blue-400 hover:drop-shadow-md transition-all'>Actividad Fundamental 2</h3>
          </Link>
        </div>

        <div className='mt-2 px-2'>
          <Link href={'https://drive.google.com/file/d/1USwNB1vObMAuDSZa6kTjZzKcrHoCO-4B/view?usp=sharing'}>
            <h3 className='text-xl font-bold hover:text-blue-400 hover:drop-shadow-md transition-all'>Actividad Fundamental 3</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FundamentalesPage
