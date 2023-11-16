"use client"
import HeaderAbout from "@/components/HeaderAbout"
import Aos from "aos"
import dynamic from "next/dynamic"
import { useEffect } from "react"

const AboutInfoDi = dynamic(() => import("@/components/SectionInfo"), {
  ssr: false,
})

const SectionAboutDi = dynamic(() => import("@/components/SectionAbout"), {
  ssr: false,
})

const SectionCountDi = dynamic(() => import("@/components/SectionCount"), {
  ssr: false,
})

export default function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div>
      <div
        className={`bg-[url('/bg-about-page.png')] flex justify-center items-start relative w-full xm:h-[50vh] h-[35vh] bg-cover bg-img`}
      >
        <HeaderAbout />
      </div>
      <div
        className={`bg-[#ffffff] flex justify-center items-start relative w-full h-full`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <AboutInfoDi />
          <SectionAboutDi />
          <SectionCountDi />
        </div>
      </div>
    </div>
  )
}
