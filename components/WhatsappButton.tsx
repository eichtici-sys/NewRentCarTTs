import { wspInfo } from "@/constants/wsp-info"
import React from "react"
import { BsWhatsapp } from "react-icons/bs"

const WhatsappButton = () => {
  return (
    <div className="fixed sm:bottom-8 bottom-6 sm:right-8 right-6 z-50 ">
      <div className="flex justify-center items-center rounded-full bg-[#25d366] w-[60px] h-[60px] pulse cursor-pointer">
        <a
          href={`https://wa.me/${wspInfo.number}?text=${wspInfo.text1}`}
          target="_blank"
        >
          <BsWhatsapp className=" w-9 h-9 text-white" />
        </a>
      </div>
    </div>
  )
}

export default WhatsappButton
