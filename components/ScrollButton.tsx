"use client"
import { Scroll } from "@/icons"
import { useEffect, useState } from "react"

const ScrollButton = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    const showBtnScroll = () => {
      if (window.scrollY >= 300) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
    }

    window.addEventListener("scroll", showBtnScroll)

    return () => {
      window.removeEventListener("scroll", showBtnScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      {showScrollTopButton && (
        <div className="fixed sm:bottom-[110px] bottom-[100px] sm:right-[40px] right-[33px] z-50">
          <div
            className="flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer bg-black border-white border-2 opacity-70 hover:opacity-100 topIcon"
            onClick={scrollToTop}
          >
            <Scroll className=" h-6 w-6 text-white rotate-[180deg] " />
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollButton
