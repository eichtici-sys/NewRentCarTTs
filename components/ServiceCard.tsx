import { Services } from "@/constants/services"
import Image from "next/image"

type ServiceCardProps = {
  card: Services
}

export default function ServiceCard({ card }: ServiceCardProps) {
  return (
    <div className="p-6 text-center">
      <div className="relative w-[280px] h-[380px] mx-auto my-[20px] card">
        <div className="face front">
          <Image
            src={card.backgroundImage}
            alt={card.title}
            width={500}
            height={500}
          />

          <h3 className="font-rubik text-white bg-whiteOpacity backdrop-blur-sm font-semibold uppercase text-center absolute bottom-0 w-full h-[45px] leading-[45px]">
            {card.title}
          </h3>
        </div>
        <div className="face back font-rubik text-white bg-black-gradient">
          <h3 className="font-rubik text-secondary font-semibold uppercase mt-[10px] text-[20px]">
            {card.title}
          </h3>
          <p className="text-justify text-white font-rubik font-light text-[16px] px-3 pt-3">
            {card.content}
          </p>
        </div>
      </div>
    </div>
  )
}
