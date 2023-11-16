import { aboutInfo } from "@/constants/about-info"
import Image from "next/image"
import CountUp from "react-countup"

const SectionCount = () => {
  return (
    <>
      <section id="count" className="font-rubik">
        <div className="w-full relative h-full min-h-[350px] xm:pb-0 pb-7">
          <div className="absolute w-full h-full bottom-[-20px]">
            <Image
              src={"/borde.png"}
              alt="borde"
              width={900}
              height={900}
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
                      className="flex flex-col text-white text-center py-6 text-[30px] font-bold"
                    >
                      <div className="flex justify-center">
                        +
                        <CountUp start={0} end={c.num} duration={3} />
                      </div>
                      <span className="uppercase font-semibold font-rubik px-3 sm:text-[16px] text-[14px]">
                        {c.display}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center px-3 sm:pt-0 pt-7">
              <Image
                src={"/gray_hyundai.png"}
                alt="Camioneta gris"
                width={600}
                height={400}
                className="w-[80%] animation"
                data-aos="fade-right"
                data-aos-duration={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionCount
