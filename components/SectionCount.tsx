"use client"
import { aboutInfo } from "@/constants/about-info"
import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const SectionCount = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <>
      <section id="count" className="font-rubik">
        <div className="w-full relative h-full min-h-[350px] xm:pb-0 pb-7">
          <div className="absolute w-full h-full bottom-[-20px]">
            <img
              src={"/borde.png"}
              alt="borde"
              className="w-screen h-full object-fill"
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 relative ">
            <div className="flex justify-center items-start md:px-20 px-10 xm:pt-5 pt-0">
              <div className="blue-gradient rounded-[20px] w-full max-w-[560px] shadow-xl">
                <div className="grid xm:grid-cols-3 xm:grid-rows-1 grid-cols-1">
                  {aboutInfo.count.map((c) => (
                    <div
                      key={c.id}
                      className="flex flex-col text-white text-center py-6"
                    >
                      <ScrollTrigger
                        onEnter={() => {
                          setCounterOn(true)
                        }}
                        onExit={() => {
                          setCounterOn(false)
                        }}
                      >
                        <span className="font-bold font-rubik px-3 sm:text-[30px] text-[25px]">
                          +
                          {counterOn && (
                            <CountUp start={0} end={c.num} duration={2} />
                          )}
                        </span>
                      </ScrollTrigger>

                      <span className="uppercase font-semibold font-rubik px-3 sm:text-[16px] text-[14px]">
                        {c.display}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center px-3 sm:pt-0 pt-7">
              <img
                src={"/gray_hyundai.png"}
                alt="Camioneta gris"
                className="w-[80%] animation"
                data-aos="fade-right"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionCount
