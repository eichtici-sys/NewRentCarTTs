import { ArrowNext } from "@/icons"
import React, { MouseEventHandler } from "react"

type NextButtonProps = {
  onClick?: MouseEventHandler<HTMLDivElement>
}
const NextButton = ({ onClick }: NextButtonProps) => {
  return (
    <div
      className={`flex justify-center items-center md:right-[-50px] sm:right-[-25px] right-0 absolute cursor-pointer translate-x-0 translate-y-[-50%] top-[50%]`}
      onClick={onClick}
    >
      <ArrowNext className="md:w-[30px] sm:w-[22px] w-[35px] md:h-[30px] sm:h-[22px] h-[35px]" />
    </div>
  )
}

export default NextButton
