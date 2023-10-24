import Footer from '@/components/Footer'
import '../public/styles.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inicio Conocer+',
  description: 'Pagina acerca del sistema operativo Windows',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className='top-0 sticky'>
          <Header />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
