import { CarKeys, CarMap, Coins } from "@/icons"

type Steps = {
  id: number
  title: string
  content: string
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

export const steps: Steps[] = [
  {
    id: 1,
    title: "Escoge",
    content: "El vehículo de tu preferencia.",
    IconComponent: CarMap,
  },
  {
    id: 2,
    title: "Cotiza",
    content: "Vía Online, la tarifa de tu reserva.",
    IconComponent: Coins,
  },
  {
    id: 3,
    title: "Recoge",
    content: "El vehículo o te lo llevamos.",
    IconComponent: CarKeys,
  },
]
