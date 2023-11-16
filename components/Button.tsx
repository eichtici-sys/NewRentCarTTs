import { ArrowNext } from "@/icons"

type ButtonProps = {
  styles: string
  display: string
  href: string
  target: boolean
  dataaos?: string
  datadelay?: number
}

const Button = ({
  styles,
  display,
  href,
  target,
  dataaos,
  datadelay,
}: ButtonProps) => {
  return (
    <div>
      <a
        href={`${href ?? "#"}`}
        className={`font-sarpanch text-white font-normal cursor-pointer ${styles}`}
        target={`${target ? "_blank" : ""}`}
        data-aos={dataaos ? dataaos : ""}
        data-aos-delay={datadelay ? datadelay : ""}
        data-aos-duration={400}
      >
        {display}
        <ArrowNext className="md:w-9 w-7 h-7 md:h-9 mx-2" />
      </a>
    </div>
  )
}

export default Button
