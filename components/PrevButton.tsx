import { ArrowNext } from "@/icons"
import React, { MouseEventHandler } from "react"

type PrevButtonProps = {
  onClick?: MouseEventHandler<HTMLDivElement>
}
const PrevButton = ({ onClick }: PrevButtonProps) => {
  return (
    <div
      className={`flex justify-center items-center md:left-[-50px] sm:left-[-25px] left-0 absolute cursor-pointer translate-x-0 translate-y-[-50%] top-[50%]`}
      onClick={onClick}
    >
      <ArrowNext className="md:w-[30px] sm:w-[22px] w-[35px] md:h-[30px] sm:h-[22px] h-[35px] rotate-180" />
    </div>
  )
}

export default PrevButton
