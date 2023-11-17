import { Location, Mail, Phone } from "@/icons"

export type ContactInfo = {
  id: string
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  data: Info[]
}

export type Info = {
  id: string
  display: string
  href?: string
}

export const contactInfo: ContactInfo[] = [
  {
    id: "phones",
    IconComponent: Phone,
    title: "Teléfonos:",
    data: [
      {
        id: "p-1",
        display: "923456789 / 951734513",
        href: "tel:+51951734513",
      },
    ],
  },
  {
    id: "mails",
    IconComponent: Mail,
    title: "Correos:",
    data: [
      {
        id: "m-1",
        display: "new_rentacar@hotmail.com",
        href: "mailto:new_rentacar@hotmail.com?subject=Solicitud de Reserva&body=Hola, necesito cotizar uno de sus servicios que quiero contratar",
      },
      {
        id: "m-2",
        display: "newrentacar.gerencia@gmail.com",
        href: "mailto:newrentacar.gerencia@gmail.com?subject=Solicitud de Reserva&body=Hola, necesito cotizar uno de sus servicios que quiero contratar",
      },
    ],
  },
  {
    id: "locations",
    IconComponent: Location,
    title: "Dirección:",
    data: [
      {
        id: "l-1",
        display: "Mz. 'V' Lt. 02 Natasha Alta - Trujillo, Perú",
      },
    ],
  },
]
