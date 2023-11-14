type PrincipalLinks = {
  id: number
  display: string
  link: string
  target: boolean
}

export const principalLinks: PrincipalLinks[] = [
  {
    id: 1,
    display: "Ver la flota",
    link: "/fleet",
    target: false,
  },
  {
    id: 2,
    display: "Reserva Ahora",
    link: "https://wa.me/51970632819?text=Buen%20día%20estoy%20interesado%20en%20hacer%20una%20reserva%20de%20un%20vehículo.%20Quisiera%20más%20información%20sobre%20sus%20servicios.",
    target: true,
  },
]
