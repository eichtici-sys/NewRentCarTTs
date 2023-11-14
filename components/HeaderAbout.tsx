import Image from "next/image"
import React from "react"

const HeaderAbout = () => {
  return (
    <div className="w-full ">
      <div
        className={`xl:max-w-[1440px]  sm:backdrop-blur-[2px] w-full h-[500px] bg-about md:after:top-[260px] sm:after:top-[200px] after:top-[160px]`}
      >
        <div className="grid sm:grid-cols-2 grid-cols-1 relative z-10">
          <div
            className={`flex justify-center items-startmd:px-16 sm:px-2 px-0 sm:my-16 my-6 sm:justify-start`}
          >
            <h1
              className={`md:text-[40px] text-[25px] sm:text-start text-center font-rubik font-bold text-white sm:py-16 py-0 sm:px-16 px-6 sm:mt-0 mt-20`}
            >
              BIENVENIDOS A <br className="sm:block hidden" />{" "}
              <span className="text-secondary">NEW RENT CAR</span>
            </h1>
          </div>
          <div
            className={`sm:py-16 py-0 flex justify-center md:px-16 sm:px-2 px-0 sm:mt-12 mt-0`}
          >
            <div className="sm:w-full w-auto h-auto">
              <Image src="/cars.png" alt="Carros" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderAbout
