import { principalLinks } from "@/constants/links-principal"
import Image from "next/image"
import React from "react"
import Button from "./Button"

export default function Principal() {
  return (
    <>
      <div
        className={`bg-pBlack flex justify-center items-start relative w-full h-screen`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <section
            id="home"
            className={`flex md:flex-row flex-col sm:py-16 py-6 xm:px-16 sm:px-7 px-6`}
          >
            <div
              className={`flex-1 flex justify-center items-start sm:flex-row flex-col xl:px-0 md:px-12 xm:px-8 sm:px-3 px-0 sm:py-16 py-6`}
            >
              <div className="sm:max-w-[50%] max-w-[100%]">
                <div className="text-white font-rubik font-semibold flex flex-row justify-between items-center w-full">
                  <h1
                    className={`md:text-[40px] text-[25px] sm:text-start text-center animation`}
                    data-aos="fade-right"
                  >
                    Encuentre, reserve, y<br className="sm:block hidden" />{" "}
                    alquile una <span className="text-gradient">CAMIONETA</span>
                    <br className="sm:block hidden" /> en sencillos pasos.
                  </h1>
                </div>
                <div className="pt-2 sm:max-w-[450px] mt-2">
                  <p
                    className="text-secondary font-normal font-rubik md:text-[16px] text-justify animation"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    Obtén una cotización de una camioneta 4x4 donde y cuando lo
                    necesites con nosotros.
                  </p>
                </div>
                <div className="pt-2 flex xm:flex-row flex-col mt-3 xm:justify-start justify-center">
                  {principalLinks.map((btns) => (
                    <Button
                      key={btns.id}
                      display={btns.display}
                      styles={`flex sm:justify-start justify-center items-center py-2 md:text-[20px] sm:text-[16px] text-[14px] mr-3 uppercase hover:underline`}
                      href={`${btns.link}`}
                      target={btns.target}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={"/raptor-blue.png"}
                    width={500}
                    height={500}
                    className={`md:w-[620px] sm:w-[400px] md:pl-10 pl-0 z-[10] relative animation`}
                    alt="Camioneta 4x4 Raptor blue"
                  />
                </div>
              </div>
            </div>
            <div className="absolute z-[0] w-1/4 h-1/4 top-0 right-0 bottom-0 left-0 mx-auto my-auto white__gradient sm:pointer-events-auto pointer-events-none"></div>
          </section>
        </div>
      </div>
    </>
  )
}
