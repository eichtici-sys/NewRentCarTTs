import {
  Adaptability,
  Experience,
  MechanicalAid,
  Security,
  Support,
} from "@/icons"

type Reasons = {
  id: number
  title: string
  content: string
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

export const reasons: Reasons[] = [
  {
    id: 1,
    title: "Experiencia",
    content:
      "Más de 15 años en el rubro nos respaldan, por ello, te garantizamos una experiencia de calidad.",
    IconComponent: Experience,
  },
  {
    id: 2,
    title: "Seguridad",
    content:
      "Contamos con todos los protocolos de bioseguridad, para hacer de tu viaje más seguro.",
    IconComponent: Security,
  },

  {
    id: 3,
    title: "Adaptabilidad",
    content:
      "Nuestras tarifas estás adaptadas a las necesidades de cada cliente.",
    IconComponent: Adaptability,
  },
  {
    id: 4,
    title: "Soporte 24/7",
    content:
      "¿Tienes alguna dudad?. Contáctanos para responder cualquier pregunta con respecto al servicio.",
    IconComponent: Support,
  },
  {
    id: 5,
    title: "Auxilio Mecánico",
    content:
      "¿Necesitas ayuda mecánica? Reportalo y te enviaremos a nuestro equipo de profesionales para asistirte.",
    IconComponent: MechanicalAid,
  },
]
