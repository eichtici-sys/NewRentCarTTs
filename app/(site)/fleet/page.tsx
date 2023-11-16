"use client"

import HeaderGallery from "@/components/HeaderGallery"
import Photo from "@/components/Photo"
import { gallery } from "@/constants/gallery"
import { motion } from "framer-motion"
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const divPhoto = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
}

export default function FleetPage() {
  return (
    <div>
      <div
        className={`bg-[url('/bg-camioneta.webp')] flex justify-center items-start relative w-full xm:h-[40vh] h-[31vh] bg-cover bg-img`}
      >
        <HeaderGallery />
      </div>
      <div
        className={`bg-[#ffffff] flex justify-center items-start relative w-full h-full xm:p-10 py-10 px-3`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <section id="fotos">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-1"
            >
              {gallery.length ? (
                <>
                  {gallery.map((img) => (
                    <motion.div key={img.id} variants={divPhoto}>
                      <Photo info={img} />
                    </motion.div>
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
}
