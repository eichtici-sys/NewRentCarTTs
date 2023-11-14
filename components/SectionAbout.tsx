import { aboutInfo } from "@/constants/about-info"

const SectionAbout = () => {
  return (
    <>
      <section id="feed" className={`sm:py-16 py-6 font-rubik`}>
        <div className={`flex justify-center items-center sm:px-16 px-6`}>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[1000px]">
            {aboutInfo.features.map((card, index) => (
              <div
                key={card.title}
                className="w-full rounded-[20px] shadow-xl py-6 px-5 flex flex-col items-center animation select-none"
                data-aos="zoom-out"
                data-aos-delay={`${
                  index === 0 ? "300" : index === 1 ? "700" : "1200"
                }`}
                data-aos-duration={`${(index + 1) * 800}`}
              >
                <div className="w-[110px] h-[110px] blue-gradient rounded-[15px] flex justify-center items-center">
                  <card.icon className=" w-16 h-16 text-white" />
                </div>
                <div className="w-full">
                  <h2 className="text-primary uppercase text-center font-bold font-rubik md:text-[25px] text-[20px] py-3">
                    {card.title}
                  </h2>
                </div>
                <div className="w-full font-rubik">
                  {card.content.map((par) => (
                    <p
                      key={par.id}
                      className="text-darkText text-justify font-light font-rubik px-5 md:text-[15px] text-[13px] flex flex-col"
                    >
                      {par.span ? (
                        <span className="font-bold">{par.span}</span>
                      ) : (
                        ""
                      )}
                      {par.display}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionAbout
