"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaRegUserCircle } from "react-icons/fa"
import { Close, LogoNewRentCar, Menu, Pause, Play } from "@/icons"
import { wspInfo } from "@/constants/wsp-info"
// @ts-ignore
import useSound from "use-sound"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { stop }] = useSound("/wall-of-fame.wav", { volume: 0.25 })

  useEffect(() => {
    if (isPlaying) {
      play()
    } else {
      stop()
    }
  }, [isPlaying, play, stop])
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", function () {
        let header = document.querySelector("#header_nav")
        header?.classList.toggle("sticky", window.scrollY > 0)
      })
    }
  }, [])

  const handlePlay = () => {
    play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    stop()
    setIsPlaying(false)
  }

  return (
    <header className="w-full fixed top-0 text-white z-50 xl:max-w-[1440px] xl:mx-auto">
      <div
        id="header_nav"
        className="relative py-6 px-10 flex items-center w-full justify-between transition-all duration-300 bg-[#0000001b]"
      >
        <div className="flex flex-grow basis-0">
          <Link href={"/"}>
            <LogoNewRentCar className=" w-32 h-12" />
          </Link>
        </div>
        <nav>
          <ul className="sm:flex hidden text-base">
            <li>
              <Link
                className="py-2 px-4 inline-block hover:bg-black/30 hover:scale-105 transition-all rounded-md"
                href={"/"}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 inline-block hover:bg-black/30 hover:scale-105 transition-all rounded-md"
                href={"/about"}
              >
                La Empresa
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 inline-block hover:bg-black/30 hover:scale-105 transition-all rounded-md"
                href={"/fleet"}
              >
                Nuestra Flota
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="sm:flex hidden flex-grow justify-end basis-0">
          <ul className="flex gap-5 items-center">
            <li id="btn_reservar">
              <Link
                href={"/"}
                className=" border-2 border-white bg-black/10 hover:bg-sky-800 transition-all py-2 px-4 rounded-md"
              >
                Reservar
              </Link>
            </li>
            <li>
              {isPlaying && (
                <Pause className="w-6 h-6 text-white" onClick={handlePause} />
              )}
              {!isPlaying && (
                <Play className="w-6 h-6 text-white" onClick={handlePlay} />
              )}
            </li>
          </ul>
        </nav>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <Close className="w-full h-full" />
            ) : (
              <Menu className=" w-full h-full" />
            )}
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li
                className={`font-rubik font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href={`/`} onClick={() => setToggle((prev) => !prev)}>
                  {"Inicio"}
                </a>
              </li>
              <li
                className={`font-rubik font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href={`/about`} onClick={() => setToggle((prev) => !prev)}>
                  {"La Empresa"}
                </a>
              </li>
              <li
                className={`font-rubik font-normal cursor-pointer text-[16px] mb-0 text-white`}
              >
                <a href={`/fleet`} onClick={() => setToggle((prev) => !prev)}>
                  {"Nuestra Flota"}
                </a>
              </li>

              <li className="font-rubik font-normal cursor-pointer text-[16px] mt-4 text-white">
                <a
                  onClick={() => setToggle((prev) => !prev)}
                  aria-label="Enviar mensaje a Whatsapp"
                  href={`https://wa.me/${wspInfo.number}?text=${wspInfo.text2}`}
                  target="_blank"
                >
                  Reservar
                </a>
              </li>
              <li className="pt-4">
                {isPlaying && (
                  <div className="bg-white p-3 rounded-full">
                    <Pause
                      className="w-6 h-6 text-black"
                      onClick={handlePause}
                    />
                  </div>
                )}
                {!isPlaying && (
                  <div className="bg-white p-3 rounded-full">
                    <Play className="w-6 h-6 text-black" onClick={handlePlay} />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
