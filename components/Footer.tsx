"use client"
import Link from "next/link"
import { social } from "@/constants/social-media"
import { linksFooter } from "@/constants/links-footer"
import { Heart, LogoNewRentCar } from "@/icons"

const FooterPage = () => {
  return (
    <div className="flex flex-col border-t-2 border-secondary">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:px-16 px-3">
        <div className="flex flex-col py-10">
          <Link href="/">
            <LogoNewRentCar className=" max-w-[230px] mx-auto" />
          </Link>

          <p className="text-white font-rubik font-light text-[14px] sm:text-justify text-center py-5 px-6">
            Somos una empresa con mas de 15 años de experiencia en el rubro de
            alquiler de vehículos
          </p>
          <span className="text-secondary font-rubik font-semibold px-6 sm:text-[16px] text-[14px] uppercase sm:text-left text-center">
            SÍGUENOS:
          </span>
          <div className="flex flex-row gap-4 px-6 py-3 sm:justify-start justify-center">
            {social.map((social) => (
              <div key={social.id}>
                <a href={social.link} target="_blank">
                  <social.icon className="sm:w-[35px] w-10 sm:h-[35px] h-10 text-white hover:text-secondary transition-colors" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {linksFooter.map((listLinks) => (
          <div key={listLinks.id} className="flex flex-col sm:py-10 py-6">
            <h2 className="text-secondary font-rubik font-semibold px-6 text-[16px] uppercase">
              {listLinks.title}
            </h2>
            <div className="flex flex-col px-6">
              {listLinks.links.map((lk) => (
                <div key={lk.name} className="flex flex-row">
                  <div className="flex justify-center items-center w-[20px]">
                    <lk.IconComponent />
                  </div>
                  <div className="text-white font-rubik font-normal uppercase text-[14px] px-3 py-2 flex flex-col">
                    {lk.link ? (
                      <a
                        href={lk.link}
                        className="cursor-pointer hover:text-secondary hover:translate-x-2 transition-all"
                      >
                        {lk.display}
                      </a>
                    ) : (
                      lk.display
                    )}
                    {lk.content
                      ? lk.content.map((con) => (
                          <div
                            key={con.id}
                            className="normal-case text-[13px] py-2"
                          >
                            {con.title ? (
                              <span className="block uppercase">
                                {con.title}
                              </span>
                            ) : (
                              ""
                            )}
                            {con.href ? (
                              <a href={con.href}>{con.content}</a>
                            ) : (
                              con.content
                            )}
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex sm:flex-row flex-col justify-between border-t-2 border-secondary">
        <div className="py-3 px-16">
          <span className="text-white font-rubik font-normal text-[12px] sm:text-start text-center">
            NEW RENT CAR © 2022 - Todos los derechos Reservados
          </span>
        </div>
        <div className="py-3 px-16">
          <div className="text-white font-rubik font-normal text-[12px] flex flex-nowrap sm:justify-start justify-center">
            Hecho con
            <Heart className="w-[20px] h-[20px] mx-1" />
            por{" "}
            <a
              href="https://www.eichtici.com"
              className="px-1 hover:text-primary"
            >
              EICHTICI
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
