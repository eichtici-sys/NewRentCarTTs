import { ArrowNext } from "@/icons"
import React from "react"

type ButtonProps = {
  styles: string
  display: string
  href: string
  target: boolean
}

const Button = ({ styles, display, href, target }: ButtonProps) => {
  return (
    <div>
      <a
        href={`${href ?? "#"}`}
        className={`font-sarpanch text-white font-normal cursor-pointer ${styles}`}
        target={`${target ? "_blank" : ""}`}
      >
        {display}
        <ArrowNext className="md:w-9 w-7 h-7 md:h-9 mx-2" />
      </a>
    </div>
  )
}

export default Button
