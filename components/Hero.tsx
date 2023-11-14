import React from "react"
import localFont from "next/font/local"
import Link from "next/link"
import { ArrowNext } from "@/icons"

const speed = localFont({ src: "../public/fonts/Special-Speed-Agent.otf" })

export default function Hero() {
  return (
    <div
      className={`bg-pBlack flex justify-center items-start relative w-full h-screen`}
    >
      <div className={`xl:max-w-[1440px] w-full`}>
        <section className="h-screen  relative overflow-hidden">
          <div
            className={` absolute z-10 text-white bottom-20 sm:bottom-28 w-full text-center`}
          >
            <span className={`${speed.className} block sm:text-5xl text-2xl`}>
              Un Camino de Libertad
            </span>
            <div className="mt-4 sm:text-xl text-base flex gap-2 items-center justify-center">
              <Link href={"/about"}> DESCUBRIR MÁS</Link>
              <ArrowNext className="w-7 h-7" />
            </div>
          </div>
          <div className="absolute top-0 bottom-0 h-screen">
            <video
              id="videoHero"
              playsInline
              autoPlay
              muted
              loop
              className=" object-cover h-screen w-screen"
            >
              <source src="/new_rent_car_VP9.webm" type="video/webm" />
            </video>
          </div>
        </section>
      </div>
    </div>
  )
}
