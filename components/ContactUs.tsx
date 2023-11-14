"use client"
import { contactInfo } from "@/constants/contact-info"
import InfoCard from "./InfoCard"
import Image from "next/image"
import ContactForm from "./ContactForm"

export default function ContactUs() {
  return (
    <>
      <div
        className={`bg-black-blue-gradient flex justify-center items-start relative w-full h-full`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <div>
            <section
              id="contact"
              className="sm:pt-16 pt-6 pb-10 w-full sm:px-16 px-6"
            >
              <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:pt-16 pt-6 pb-0">
                <div className="flex flex-col sm:col-span-2 col-span-1">
                  <div>
                    <h2 className="text-white font-rubik font-bold md:text-[40px] text-[25px] sm:text-start text-center">
                      Comunicate <span className="text-secondary">AHORA</span>{" "}
                      con <br className="sm:block hidden" />
                      {""}
                      <span className="text-secondary">NOSOTROS</span> y haz tu{" "}
                      <span className="text-secondary">RESERVA</span>
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 grid-cols-1">
                    <div className={`flex flex-col gap-3 py-6 mx-auto`}>
                      {contactInfo.map((info) => (
                        <InfoCard key={info.id} info={info} />
                      ))}
                    </div>
                    <div className="flex items-end">
                      <Image
                        src={"/person-02.png"}
                        alt="Persona que alquila"
                        width={800}
                        height={800}
                        className=" max-w-[480px] w-full"
                      />
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
