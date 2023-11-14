"use client"

import { services } from "@/constants/services"
import ServiceCard from "./ServiceCard"
import AliceCarousel from "react-alice-carousel"

export default function Serviceses() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }
  const items = services.map((card) => (
    <ServiceCard key={card.id} card={card} />
  ))

  return (
    <>
      <div
        className={`bg-[url('/background-service.webp')] flex justify-center items-start relative w-full h-full bg-cover`}
      >
        <div
          className={`xl:max-w-[1440px] w-full bg-blackGradient sm:backdrop-blur-[2px]`}
        >
          <div>
            <div className="w-full sm:min-h-[100vh] sm:pb-0 pb-10">
              <section
                id="services"
                className={`sm:px-16 px-6 sm:py-16 py-6 max-w-[1200px] mx-auto`}
              >
                <div className={`pt-6 pb-6`}>
                  <h2 className="text-white font-rubik font-semibold sm:text-[32px] text-[25px] text-center">
                    Nuestros Servicios
                  </h2>
                </div>
                <AliceCarousel
                  autoPlay
                  mouseTracking
                  responsive={responsive}
                  autoPlayStrategy="none"
                  autoPlayInterval={3200}
                  animationDuration={1000}
                  animationType="fadeout"
                  infinite
                  touchTracking={false}
                  disableButtonsControls
                  items={items}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
