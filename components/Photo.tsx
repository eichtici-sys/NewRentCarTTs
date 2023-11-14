import { Gallery } from "@/constants/gallery"
import { wspInfo } from "@/constants/wsp-info"
import { Asientos, CajaCambios, Combustible, Model, Year } from "@/icons"
import Image from "next/image"
import React from "react"

const Photo = ({ info }: { info: Gallery }) => {
  return (
    <>
      {info.image && (
        <div className="flip relative w-full h-[260px]">
          <div className="flip__front bg-black-gradient h-full">
            <div className="w-full h-full object-cover">
              <Image
                src={info.image}
                alt={info.alt}
                width={500}
                height={300}
                className="w-full h-full rounded-[20px] object-cover"
              />
            </div>

            {info.image && (
              <h2 className="absolute w-full text-center bottom-[15px] left-0 text-white px-6 font-bold sm:text-[20px] text-[20px] t-shadow">
                {info.name}
              </h2>
            )}
          </div>
          <div className="flip__back bg-black-gradient p-2 h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <h2 className="font-rubik font-bold text-secondary text-[22px] px-5 text-center py-3">
                  {info.name}
                </h2>
                {info.details.length ? (
                  info.details.map((detail, index) => (
                    <div key={index}>
                      {detail && (
                        <div className="flex flex-col">
                          <div className="grid grid-cols-2 gap-1 px-4 py-2">
                            <div className="flex items-center">
                              <Year className="w-5 h-5 text-white" />
                              <p className="font-rubik font-light text-white text-[14px] px-2">
                                <span className="font-bold">Año:</span>{" "}
                                {detail.año}{" "}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <Model className="w-5 h-5 text-white" />
                              <p className="font-rubik font-light text-white text-[14px] px-2">
                                <span className="font-bold">Modelo:</span>{" "}
                                {detail.modelo}{" "}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <Asientos className="w-5 h-5 text-white" />
                              <p className="font-rubik font-light text-white text-[14px] px-2">
                                <span className="font-bold">Asientos:</span>{" "}
                                {detail.asientos}{" "}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <Combustible className="w-5 h-5 text-white" />
                              <p className="font-rubik font-light text-white text-[14px] px-2">
                                <span className="font-bold">Combustible:</span>{" "}
                                {detail.combustible}{" "}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <CajaCambios className="w-5 h-5 text-white" />
                              <p className="font-rubik font-light text-white text-[14px] px-2">
                                <span className="font-bold">Tipo:</span>{" "}
                                {detail.motor}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="py-4 px-6 text-center font-rubik font-light text-white text-[14px]">
                    {info.description}
                  </p>
                )}
              </div>
              <div>
                {info.button === true ? (
                  <div className="w-full flex justify-center px-4 pb-3">
                    <a
                      aria-label="Enviar solicitud de cotización"
                      href={`https://wa.me/${wspInfo.number}?text=Hola%20que%20tal,%20quisiera%20que%20me%20haga%20una%20cotización%20para%20el%20alquiler%20del%20vehiculo%20${info.details[0].marca}%20,modelo:%20${info.details[0].modelo}`}
                      target="_blank"
                      className="py-2 px-6 text-white font-rubik font-normal bg-primary rounded-[20px] cursor-pointer"
                    >
                      Cotizar Ahora
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Photo
