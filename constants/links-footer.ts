import { ArrowTriangle, Faq, Location, Mail, Phone, Timer } from "@/icons"

export type LinksFooterType = {
  id: string
  title?: string
  links: LinksF[]
}

export type LinksF = {
  name?: string
  display?: string
  content?: Content[]
  link?: string
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

export type Content = {
  id: string
  title?: string
  content?: string
  href?: string
}

export const linksFooter: LinksFooterType[] = [
  {
    id: "links1",
    title: "Sobre Nosotros",
    links: [
      {
        name: "about",
        display: "La Empresa",
        link: "/about",
        IconComponent: ArrowTriangle,
      },
      {
        name: "flota",
        display: "Nuestra Flota",
        link: "/fleet",
        IconComponent: ArrowTriangle,
      },
      {
        name: "terms",
        display: "Términos y Condiciones",
        link: "/terms",
        IconComponent: ArrowTriangle,
      },
      {
        name: "politycs",
        display: "Políticas de Reserva",
        link: "/pol",
        IconComponent: ArrowTriangle,
      },
    ],
  },
  {
    id: "links2",
    title: "Atención al Cliente",
    links: [
      {
        name: "horario",
        display: "Horarios de Atención",
        content: [
          {
            id: "ac-1",
            title: "LUNES A VIERNES",
            content: "8:00 am - 9:00 pm",
          },
          {
            id: "ac-2",
            title: "SÁBADOS",
            content: "8:00 am - 1:00 pm",
          },
          {
            id: "ac-3",
            title: "DOMINGOS",
            content: "Solo Vía Online previa Reserva",
          },
        ],
        IconComponent: Timer,
      },
      {
        name: "faqs",
        display: "Preguntas Frecuentes",
        IconComponent: Faq,
        link: "/faqs",
      },
    ],
  },
  {
    id: "links3",
    title: "Contáctanos",
    links: [
      {
        name: "foophones",
        display: "Teléfonos",
        content: [
          {
            id: "t-1",
            content: "923 456 789 / 951734513",
            href: "tel:+51951734513",
          },
        ],
        IconComponent: Phone,
      },
      {
        name: "foomails",
        display: "Correos",
        content: [
          {
            id: "c-1",
            content: "new_rentacar@hotmail.com",
            href: "mailto:new_rentacar@hotmail.com?subject=Solicitud de Reserva&body=Hola, necesito cotizar uno de sus servicios que quiero contratar",
          },
          {
            id: "c-2",
            content: "newrentacar.gerencia@gmail.com",
            href: "mailto:newrentacar.gerencia@gmail.com?subject=Solicitud de Reserva&body=Hola, necesito cotizar uno de sus servicios que quiero contratar",
          },
        ],
        IconComponent: Mail,
      },
      {
        name: "foolocation",
        display: "Dirección",
        content: [
          {
            id: "l-1",
            content: "MZ. V LT. 02 Natasha Alta - Trujillo, Perú",
          },
        ],
        IconComponent: Location,
      },
    ],
  },
]
