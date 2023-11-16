import Bars from "./Bars"
import Button from "./Button"
import Image from "next/image"

export default function AboutInfo() {
  return (
    <>
      <div
        className={`bg-transparent flex justify-center items-start relative w-full h-auto`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <div>
            <div className="block">
              <Bars
                dir={true}
                styles={`bottom-0`}
                sizeBar1={`sm:w-[350px] w-[160px] sm:h-5 h-2.5`}
                sizeBar2={`sm:w-[280px] w-[120px] sm:h-5 h-2.5`}
                sizeBar3={`sm:w-[200px] w-20 sm:h-5 h-2.5`}
              />
            </div>
            <section
              id="about"
              className={`flex md:flex-row flex-col xm:px-16 sm:px-3 px-6`}
            >
              <div
                className={`flex-1 flex items-start sm:flex-row flex-col-reverse xl:px-0 md:px-12 sm:px-8 px-0 pt-3 pb-6 justify-between`}
              >
                <div className="sm:max-w-[50%] max-w-[100%] sm:w-[50%] w-full flex-1">
                  <div className="flex sm:flex-row flex-col items-center sm:px-2 px-0">
                    <Image
                      src={"/info1.webp"}
                      alt="Auto en la noche"
                      width={200}
                      height={200}
                      className=" rounded-xl p-2 sm:w-[42%] animation"
                      data-aos="zoom-out"
                      data-aos-duration={200}
                    />
                    <Image
                      src={"/info2.webp"}
                      width={230}
                      height={230}
                      alt="Interior auto"
                      className=" rounded-xl p-2 sm:w-[58%] animation"
                      data-aos="zoom-out"
                      data-aos-duration={200}
                    />
                  </div>
                </div>
                <div className="sm:max-w-[50%] max-w-[100%] sm:w-[50%] w-full">
                  <div className="flex flex-col mt-10 sm:px-3 px-0">
                    <div
                      className="flex justify-start mb-2 animation"
                      data-aos="fade-right"
                      data-aos-duration={300}
                    >
                      <span
                        className="text-secondary uppercase font-rubik font-semibold md:text-[16px] text-[14px] animation"
                        data-aos="fade-right"
                        data-aos-duration={300}
                      >
                        Sobre nosotros
                      </span>
                    </div>
                    <div className="flex justify-start mb-2">
                      <span
                        className="text-white font-rubik font-semibold md:text-[32px] text-[25px] animation"
                        data-aos="fade-right"
                        data-aos-duration={400}
                      >
                        Nuestros mas de 15 años en el rubro nos respaldan
                      </span>
                    </div>
                    <div className="flex justify-start mb-4">
                      <p
                        className="text-ligthText font-rubik font-light md:text-[16px] sm:text-[14px] text-[12px] text-justify animation"
                        data-aos="fade-left"
                        data-aos-duration={400}
                      >
                        <span className="font-bold">New Rent Car</span> es una
                        empresa líder de proveedores de servicios de movilidad,
                        contamos con una amplia gama de servicios personalizados
                        a la necesidad de cada uno de nuestros clientes. Al día
                        de hoy alquilamos bajo el esquema de renta diaria y
                        empresarial.
                      </p>
                    </div>
                    <div className="flex justify-start">
                      <Button
                        display={"Saber Más"}
                        styles={`uppercase flex sm:justify-start justify-center items-center py-2 md:text-[20px] sm:text-[16px] text-[14px] hover:underline animation`}
                        target={false}
                        href={`/about`}
                        dataaos={`fade-up`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
