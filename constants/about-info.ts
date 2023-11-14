import { Mision, Values, Vision } from "@/icons"
export type AboutInfo = {
  title: string
  content: string
  features: Features[]
  count: Count[]
  topImage: string
  backgroundImage: string
  bottomImage: string
  flyer: string
}

export type Features = {
  title: string
  content: FeaturesContent[]
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export type FeaturesContent = {
  id: string
  span?: string
  display: string
}
export type Count = {
  id: string
  num: number
  display: string
}

export const aboutInfo: AboutInfo = {
  title: "¿Quiénes Somos?",
  content:
    "New Rent Car, es una empresa que surgió en el año 2010 con el trabajo arduo de su fundador y su capacidad de brindar una mejor experiencia al momento de viajar. La motivación de crear un valor agregado en el momento de alquilar un vehículo y poder adaptarlo a las necesidades de cada persona, fue lo que le llevó a empezar a construir paso a paso, el equipo que lo conforma. Nuestra prioridad es asistir a nuestros clientes como si fueran nuestras familias y que se sientan identificados con la empresa. Hoy en día contamos con una flota más amplia de vehiculos y servicios personalizados, todos adapatados al alcance de cada uno. El nombre de NEW RENT CAR, hace reseña a los pensamientos del fundador, en presentar a un nuevo servicio de alquiler de vehículos, totalmente distinto a los demás, llevando en sí mismo un sinónimo de visión de negocios moderna.",
  features: [
    {
      title: "Misión",
      content: [
        {
          id: "mis-1",
          display:
            "Brindar la mejor experiencia y calidad de alquiler de vehículos, adaptada a las diferentes necesidades de sus clientes, ofreciendo una moderna flota de vehículos.",
        },
      ],
      icon: Mision,
    },
    {
      title: "Visión",
      content: [
        {
          id: "vis-1",
          display:
            "Ser Revolucionarios en el servicio de alquiler de vehículos, cuidando a nuestros clientes y el medio ambiente en conjunto con un equipo de los mejores profesionales en el rubro.",
        },
      ],
      icon: Vision,
    },
    {
      title: "Valores",
      content: [
        {
          id: "val-1",
          span: "Seguridad: ",
          display: "Cuidamos a nuestros clientes.",
        },
        {
          id: "val-2",
          span: "Integridad:",
          display: "Conducir con Honestidad y Transparencia.",
        },
        {
          id: "val-3",
          span: "Calidad: ",
          display: "Constante capacitación para un excelente servicio.",
        },
        {
          id: "val-4",
          span: "Puntualidad: ",
          display: "Cumplimos a tiempo nuestros compromisos.",
        },
        {
          id: "val-5",
          span: "Adaptabilidad: ",
          display: "Tarifas accesibles a tu necesidad",
        },
      ],
      icon: Values,
    },
  ],
  count: [
    {
      id: "count-1",
      num: 300,
      display: "Clientes Satisfechos",
    },
    {
      id: "count-2",
      num: 30,
      display: "Vehículos",
    },
    {
      id: "count-3",
      num: 15,
      display: "Años de Experiencia",
    },
  ],
  topImage: "/cars.png",
  backgroundImage: "/bg_cars.webp",
  bottomImage: "/bg_gray_hyundai.png",
  flyer: "/borde.png",
}
