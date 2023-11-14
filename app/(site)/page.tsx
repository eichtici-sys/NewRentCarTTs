import AboutInfo from "@/components/AboutInfo"
import Clients from "@/components/Clients"
import ContactUs from "@/components/ContactUs"
import Hero from "@/components/Hero"
import HowDoesItWork from "@/components/HowDoesItWork"
import Principal from "@/components/Principal"
import WhyChoose from "@/components/WhyChoose"
import "react-alice-carousel/lib/alice-carousel.css"
import dynamic from "next/dynamic"

const ComponentWithNoSSR = dynamic(() => import("@/components/Serviceses"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Hero />
      <Principal />
      <AboutInfo />
      <WhyChoose />
      <HowDoesItWork />
      <ComponentWithNoSSR />
      <ContactUs />
      <Clients />
    </>
  )
}
