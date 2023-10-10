'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const path = usePathname()

    return (
        <div className={`bgColorContainer`} >
            <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-5 w-full h-min py-3 justify-center">
                <Link href={'/'} className={`text-2xl text-blue-500 font-extrabold`} >Conocer+</Link>
                <Link href={'/fundamentales'} className={`text-md text-white hover:text-blue-500 transition-all ${path === '/fundamentales' && 'text-blue-600'}`} >Fundamentales</Link>
                <Link href={'/windows'} className={`text-md text-white hover:text-blue-500 transition-all ${path === '/windows' && 'text-blue-600'}`} >Windows</Link>
                <Link href={'/windows/caracteristicas'} className={`text-md text-white hover:text-blue-500 transition-all ${path === '/windows/caracteristicas' && 'text-blue-600'}`} >Caracteristicas</Link>
                <Link href={'/nosotros'} className={`text-md text-white hover:text-blue-500 transition-all ${path === '/nosotros' && 'text-blue-600'}`} >Nosotros</Link>
            </nav>
        </div>
    )
}

export default Header
