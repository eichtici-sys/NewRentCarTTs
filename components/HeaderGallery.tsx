const HeaderGallery = () => {
  return (
    <div className="w-full">
      <div
        className={`xl:max-w-[1440px] bg-blackGradient sm:backdrop-blur-[2px] w-full h-[500px] relative`}
      >
        <div className="grid grid-cols-1 relative z-10 pt-16">
          <h1
            className={`md:text-[40px] text-[25px] sm:text-start text-center font-rubik font-bold text-white sm:pt-30 sm:px-16 px-6 py-3 mx-auto`}
          >
            NUESTRA FLOTA
          </h1>
          <p className="text-white text-center font-rubik font-light md:text-[15px] text-[13px] py-10 max-w-[700px] mx-auto sm:px-0 px-4">
            Contamos con una amplia variedad de vehículos disponibles según cada
            necesidad. Nos adaptamos a tus planes ofreciéndote la mejor opción
            vehicular.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderGallery
