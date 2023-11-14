"use client"
import { clients } from "@/constants/clients"
import Image from "next/image"

export default function Clients() {
  return (
    <>
      <div className={`flex justify-center items-start relative w-full h-full`}>
        <div className={`xl:max-w-[1440px] w-full bg-white`}>
          <div className={`pt-6 pb-6`}>
            <h2 className="text-primary font-rubik font-semibold sm:text-[32px] text-[25px] text-center">
              Creen en nosotros
            </h2>
          </div>
          {/* logo */}
          <div className="logos py-10">
            <div className=" sliders-logo">
              {clients.map((client) => (
                <div className="slide-card" key={client.id}>
                  <Image
                    src={`/logo-${client.imageUrl}`}
                    alt={`logo_${client.name}`}
                    width={800}
                    height={800}
                    className="h-full w-auto mx-auto"
                  />
                </div>
              ))}
              {clients.map((client) => (
                <div className="slide-card" key={client.id}>
                  <Image
                    src={`/logo-${client.imageUrl}`}
                    alt={`logo_${client.name}`}
                    width={800}
                    height={800}
                    className="h-full w-auto mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
