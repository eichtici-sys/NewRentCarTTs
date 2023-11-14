import { reasons } from "@/constants/reasons-why-choose"
import Image from "next/image"
import React from "react"

export default function WhyChoose() {
  return (
    <>
      <div
        className={`bg-[url('/map.webp')] flex justify-center items-start relative w-full h-full bg-cover`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <div className="w-full min-h-[100vh]">
            <section
              id="whychoose"
              className={`flex flex-col md:px-10 sm:px-16 px-0 sm:pt-10 pt-10 sm:pb-0 pb-5`}
            >
              <div className={`w-full sm:py-8 py-6`}>
                <h2
                  className="text-white font-rubik font-semibold sm:text-[32px] text-[25px] text-center animation"
                  data-aos="zoom-in"
                >
                  ¿Por qué elegirnos?
                </h2>
              </div>
              <div
                className={`w-full md:px-16 sm:px-3 px-3 flex flex-wrap justify-center`}
              >
                <div className="flex justify-center flex-wrap gap-5">
                  {reasons.map((reason) => (
                    <div
                      key={reason.id}
                      className="relative sm:w-[416px] w-full h-[146px] m-0 rounded-[20px] sm:backdrop-blur-sm shadow-lg border__glass flex flex-row transition-all animation"
                    >
                      <div className="w-[20%]">
                        <div className="w-[49px] h-[49px] bg-white rounded-[10px] mx-auto my-3 p-2 flex justify-center items-center flex-auto">
                          {
                            <reason.IconComponent className=" w-7.5 text-primary" />
                          }
                        </div>
                      </div>
                      <div className="flex flex-col mt-3 w-[80%] relative">
                        <div>
                          <h3 className="text-white font-semibold font-rubik sm:text-[22px] text-[18px] pr-5">
                            {reason.title}
                          </h3>
                        </div>
                        <div>
                          <p className="sm:text-ligthText text-white font-light font-rubik sm:text-[16px] text-[14px] text-justify pr-5">
                            {reason.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="sm:flex hidden md:mt-0 mt-6">
              <div className="md:absolute relative bottom-2 right-10 md:w-auto w-[50%]">
                <Image
                  src={"/corolla-white.png"}
                  alt="Corolla color blanco"
                  width={200}
                  height={200}
                  className="md:w-[320px] w-[80%] m-auto animation"
                />
              </div>
              <div className="md:absolute relative bottom-0 left-10 md:w-auto w-[50%]">
                <Image
                  src={"/person-01.png"}
                  alt="Corolla color blanco"
                  width={500}
                  height={500}
                  className="md:w-[250px] w-[50%] m-auto animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
