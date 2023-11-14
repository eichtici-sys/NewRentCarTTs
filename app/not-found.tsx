import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <div
        className={`bg-[url('/gallery/F13-flota-autos.webp')] flex justify-center items-start relative w-full xm:h-[25vh] h-[20vh] bg-cover bg-img`}
      >
        <div className="w-full">
          <div
            className={`xl:max-w-[1440px] bg-blackGradient sm:backdrop-blur-[2px] w-full h-[400px] relative`}
          >
            <div className="grid grid-cols-1 relative z-10 pt-16">
              <h1
                className={`md:text-[40px] text-[25px] sm:text-start text-center font-rubik font-bold text-white sm:pt-30sm:px-16 px-6 py-3 mx-auto`}
              >
                PÁGINA NO ENCONTRADA
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#ffffff] flex justify-center items-start relative w-full h-full py-6 px-3`}
      >
        <div className="py-2 w-full px-10 flex flex-col items-center">
          <h2 className="font-rubik font-bold text-primary text-[20px]">
            ERROR 404
          </h2>
          <p className="text-darkText font-rubik font-light py-1">
            Nosotros buscamos por todas partes esta página
          </p>
          <p className="text-darkText font-rubik font-light py-1">
            ¿Estás seguro que la URL del sitio Web es correcta?
          </p>
          <p className="text-darkText font-rubik font-light py-1">
            Ponganse en contacto con el propietario de este sitio
          </p>
          <Link
            href="/"
            className="py-2 px-6 bg-transparent border-secondary text-secondary font-rubik font-semibold border-2 mt-2 rounded-[20px] hover:underline"
          >
            Ir al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
