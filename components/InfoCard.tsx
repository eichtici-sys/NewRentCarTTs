import { ContactInfo } from "@/constants/contact-info"

type InfoProps = {
  info: ContactInfo
}

export default function InfoCard({ info }: InfoProps) {
  return (
    <>
      <div className="flex blue-gradient max-w-[360px] rounded-2xl py-3 px-2">
        <div className="flex justify-center items-center py-3 px-5">
          <info.IconComponent className=" w-9 h-9" />
        </div>
        <div className="bg-white flex flex-col max-w-[290px] w-full rounded-lg py-3 px-6">
          <span className="text-darkText font-semibold text-[15px]">
            {info.title}
          </span>
          {info.data.map((dat) => (
            <a
              key={dat.id}
              className={`text-darkText font-rubik font-normal text-[14px] hover:text-primary ${
                dat.href ? "cursor-pointer" : ""
              }`}
              href={`${dat.href ? dat.href : "#"}`}
            >
              {dat.display}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
