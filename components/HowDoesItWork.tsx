import React from "react"
import Bars from "./Bars"
import { steps } from "@/constants/steps"

export default function HowDoesItWork() {
  return (
    <>
      <div
        className={`bg-transparent flex justify-center items-start relative w-full h-auto`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <div>
            <div className="pt-4 flex justify-between">
              <Bars
                dir={true}
                styles={`top-0`}
                sizeBar1={`sm:w-[350px] w-[160px] sm: h-5  h-2.5`}
                sizeBar2={`sm:w-[280px] w-[120px] sm: h-5  h-2.5`}
                sizeBar3={`sm:w-[200px] w-[80px] sm: h-5  h-2.5`}
              />
              <Bars
                dir={false}
                styles={`top-0 flex flex-col justify-end items-end`}
                sizeBar1={`sm:w-[350px] w-[160px] sm: h-5  h-2.5`}
                sizeBar2={`sm:w-[280px] w-[120px] sm: h-5  h-2.5`}
                sizeBar3={`sm:w-[200px] w-[80px] sm: h-5 h-2.5`}
              />
            </div>
            <div className="mt-[-20px] flex flex-col items-center justify-center pb-4">
              <span
                className="text-secondary uppercase font-rubik font-semibold md:text-[16px] text-[14px] animation"
                data-aos="zoom-in"
              >
                ¿Cómo Funciona?
              </span>
              <h2
                className="text-white font-rubik font-semibold sm:text-[32px] text-[25px] text-center animation"
                data-aos="zoom-in"
              >
                Alquila un vehículo en 3 simples pasos
              </h2>
            </div>
            <div className={`sm:px-16 px-6 pb-6`}>
              <div
                className={`bg-black-gradient w-full rounded-[20px] border border-white px-3 sm:py-16 py-6`}
              >
                <div className="grid md:grid-cols-3 xm:grid-cols-2 grid-cols-1 gap-6 sm:mt-0 mt-8 justify-items-center">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center relative mb-6"
                    >
                      <span
                        className="text-[#86c5ff] font-bold font-rubik text-[85px] animation"
                        data-aos="zoom-in"
                        data-aos-delay={`${(index + 1) * 600}`}
                        data-aos-duration={`${(index + 1) * 500}`}
                      >
                        {step.id}
                      </span>
                      <div
                        className="relative w-[240px] animation"
                        data-aos="zoom-in"
                        data-aos-delay={`${(index + 1) * 1000}`}
                        data-aos-duration={`${(index + 1) * 500}`}
                      >
                        <div className="sm:w-[198px] w-[160px] bg-primary flex flex-col border-2 border-primary rounded-[12px] ml-7 z-10 relative hover:border-white select-none hover:bg-pBlack transition-all">
                          <div className="flex justify-center items-center pt-5 pb-3">
                            {
                              <step.IconComponent className="w-[85px] h-[85px]" />
                            }
                          </div>
                          <div className="flex justify-center items-center px-4 py-2">
                            <h3 className="text-white font-semibold font-rubik text-center text-[25px]">
                              {step.title}
                            </h3>
                          </div>
                          <div className="flex justify-center items-center px-4 py-2">
                            <p className="text-ligthText font-rubik font-light md:text-[16px] text-[14px] text-center pb-10">
                              {step.content}
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#b6e2fcb3] sm:w-[188px] w-[150px] h-[248px] rounded-[12px] z-[1] absolute top-[-30px] sm:right-[-13px] right-[20px]"></div>
                        <div className="bg-[#b6e2fcb3] sm:w-[188px] w-[150px] h-[248px] rounded-[12px] z-[3] absolute top-[-10px] sm:right-[-35px] right-[0px]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
