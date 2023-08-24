import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { PiCaretCircleRight } from 'react-icons/pi'

const speed = localFont({ src: '../public/fonts/Special-Speed-Agent.otf' })


export default function Hero() {
  return (
    <section className='h-screen w-screen relative overflow-hidden'>
      <div className={` absolute z-10 text-white bottom-28 w-full text-center`}>
        <span className={`${speed.className} block text-5xl`}>Un Camino de Libertad</span>
        <div className='mt-4 text-xl flex gap-2 items-center justify-center'>
          <Link href={'/about'}> DESCUBRIR MÁS</Link>
          <PiCaretCircleRight className="w-7 h-7" />
        </div>
      </div>
      <div className='absolute top-0 bottom-0 h-screen'>
        <video id='videoHero' playsInline autoPlay muted loop className=" object-cover h-screen w-screen">
          <source src='/hero2.webm' type='video/webm' />
          <source src='/hero2.mp4' type='video/mp4' />
        </video>

      </div>

    </section>

  )
}
