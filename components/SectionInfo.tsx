import { aboutInfo } from "@/constants/about-info"
import React from "react"
import ReactPlayer from "react-player"

const SectionInfo = () => {
  return (
    <>
      <section id="info">
        <div className="grid xm:grid-cols-2 grid-cols-1 sm:pt-0 pt-20">
          <div className="py-6 xm:pl-16 pl-2 xm:pr-6 pr-2">
            <div
              className="rounded-[20px] overflow-hidden shadow-xl md:w-auto w-full md:h-auto h-auto mx-auto animation"
              data-aos="zoom-in"
            >
              <ReactPlayer
                url={"promotional_video.webm"}
                controls
                className="w-full h-auto object-cover p-0 vid"
              />
            </div>
          </div>
          <div className="py-6 xm:pr-16 sm:pr-10 pr-6 xm:pl-6 sm:pl-10 pl-6">
            <div className="flex flex-col">
              <h2
                className="md:text-[40px] text-[25px] sm:text-start text-center font-rubik font-bold text-primary animation"
                data-aos="zoom-in"
              >
                {aboutInfo.title}
              </h2>
              <p
                className="text-darkText text-justify font-rubik font-light md:text-[15px] text-[13px] pt-3 animation"
                data-aos="fade-up-right"
              >
                {aboutInfo.content}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionInfo
