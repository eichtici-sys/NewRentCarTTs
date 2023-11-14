"use client"

import HeaderGallery from "@/components/HeaderGallery"
import Photo from "@/components/Photo"
import { gallery } from "@/constants/gallery"

export default function FleetPage() {
  return (
    <div>
      <div
        className={`bg-[url('/bg-camioneta.webp')] flex justify-center items-start relative w-full xm:h-[40vh] h-[30vh] bg-cover bg-img`}
      >
        <HeaderGallery />
      </div>
      <div
        className={`bg-[#ffffff] flex justify-center items-start relative w-full h-full xm:p-10 py-10 px-3`}
      >
        <div className={`xl:max-w-[1440px] w-full`}>
          <section id="fotos">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-1">
              {gallery.length ? (
                <>
                  {gallery.map((img) => (
                    <Photo info={img} key={img.id} />
                  ))}
                </>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
