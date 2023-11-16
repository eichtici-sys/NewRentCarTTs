"use client"

import Aos from "aos"
import { useEffect } from "react"

type BarsProps = {
  dir: boolean
  styles: string
  sizeBar1: string
  sizeBar2: string
  sizeBar3: string
}

const Bars = ({ dir, styles, sizeBar1, sizeBar2, sizeBar3 }: BarsProps) => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div className={`${dir ? "left-0" : "right-0"} ${styles}`}>
      <div
        className={`${sizeBar1} ${
          dir ? "rounded-r-[8px]" : "rounded-l-[8px]"
        }  bg-primary mb-2 animation`}
        data-aos={`${dir === true ? "fade-right" : "fade-left"}`}
      ></div>
      <div
        className={`${sizeBar2} ${
          dir ? "rounded-r-[8px]" : "rounded-l-[8px]"
        }  bg-secondary mb-2 animation`}
        data-aos={`${dir === true ? "fade-right" : "fade-left"}`}
      ></div>
      <div
        className={`${sizeBar3} ${
          dir ? "rounded-r-[8px]" : "rounded-l-[8px]"
        }  bg-white mb-2 animation`}
        data-aos={`${dir === true ? "fade-right" : "fade-left"}`}
      ></div>
    </div>
  )
}

export default Bars
