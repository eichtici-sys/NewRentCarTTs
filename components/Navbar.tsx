'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import SvgLogo from './SvgLogo'

const Navbar = () => {

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", function () {
        let header = document.querySelector("#header_nav")
        header?.classList.toggle("sticky", window.scrollY > 0)
      })
    }
  }, [])

  return (
    <header className='w-full fixed top-0 text-white z-50'>
      <div id='header_nav' className='relative py-6 px-10 flex items-center w-full justify-between transition-all duration-300 bg-transparent'>
        <div className='flex flex-grow basis-0'>
          <Link href={'/'}>
            <SvgLogo width={124} height={46} />
          </Link>
        </div>
        <nav>
          <ul className='flex text-base'>
            <li><Link className='py-2 px-4 inline-block hover:bg-black/30 hover:scale-105 transition-all rounded-md' href={'/'}>Inicio</Link></li>
            <li><Link className='py-2 px-4 inline-block hover:bg-black/30 hover:scale-105 transition-all rounded-md' href={'/abut'}>La Empresa</Link></li>
            <li><Link className='py-2 px-4 inline-block hover:bg-black/30 hover:scale-105 transition-all rounded-md' href={'/flota'}>Nuestra Flota</Link></li>
          </ul>
        </nav>
        <nav className='flex flex-grow justify-end basis-0'>
          <ul className='flex gap-5 items-center'>
            <li id='btn_reservar'><Link href={'/'} className=' border-2 border-white bg-black/10 hover:bg-sky-800 transition-all py-2 px-4 rounded-md'>Reservar</Link></li>
            <li><FaRegUserCircle className="w-6 h-6 text-white" /></li>
          </ul>
        </nav>
      </div>


    </header>
  )
}

export default Navbar
