import type { Metadata } from "next"
import "../globals.css"
import { Rubik, Sarpanch } from "next/font/google"
import Navbar from "../../components/Navbar"
import FooterPage from "@/components/Footer"
import WhatsappButton from "@/components/WhatsappButton"
import ToastProvider from "./toast.provider"
import { gallery } from "@/constants/gallery"
import "aos/dist/aos.css"

const sarpanch = Sarpanch({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  title: "New Rent Car | Alquiler de Vehículos",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} overflow-x-hidden `}>
      <head>
        <link rel="preload" href="/new_rent_car_VP9.webm" />
        <link rel="preload" href="/service-1.webp" />
        <link rel="preload" href="/service-2.webp" />
        <link rel="preload" href="/service-3.webp" />
        <link rel="preload" href="/service-4.webp" />
        <link rel="preload" href="/service-5.webp" />
        <link rel="preload" href="/service-6.webp" />
        <link rel="preload" href="/service-7.webp" />
        <link rel="preload" href="/service-8.webp" />
        {gallery.map((image, index) => (
          <link key={index} rel="preload" href={image.image} as="image" />
        ))}
      </head>
      <body
        className={`${sarpanch.className} overflow-x-hidden bg-pBlack xl:max-w-[1440px] xl:mx-auto`}
      >
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <WhatsappButton />
          <FooterPage />
        </ToastProvider>
      </body>
    </html>
  )
}
