export type Gallery = {
  id: string
  image: string
  name: string
  details: DetailsGallery[]
  alt: string
  description: string
  button: boolean
}

export type DetailsGallery = {
  marca: string
  modelo: string
  asientos: number
  año?: number
  motor: string
  combustible: string
}

export const gallery: Gallery[] = [
  {
    id: "FF1",
    image: "/gallery/Camioneta-Hyundai-Creta-Grand.jpg",
    name: "Hyundai Creta Grand",
    details: [
      {
        marca: "Hyundai",
        modelo: "Creta Grand",
        asientos: 7,
        año: 2023,
        motor: "Mecánico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Hyundai Creta Grand 2023 Color Blanco",
    description: "",
    button: true,
  },
  {
    id: "FF2",
    image: "/gallery/Camioneta-Toyota-Fortuner.jpg",
    name: "Toyota Fortuner",
    details: [
      {
        marca: "Toyota",
        modelo: "Fortuner",
        asientos: 7,
        año: 2023,
        motor: "Mecánico",
        combustible: "Petróleo",
      },
    ],
    alt: "Camioneta Toyota Fortuner 2023 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF3",
    image: "/gallery/F7-Camioneta-chevrolet-captiva.webp",
    name: "Chevrolet Captiva",
    details: [
      {
        marca: "Chevrolet",
        modelo: "Captiva",
        asientos: 7,
        año: 2022,
        motor: "Mecánico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Chevrolet Captiva 2022 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF4",
    image: "/gallery/F1-Auto-Corolla-Blanco.webp",
    name: "Toyota Corolla",
    details: [
      {
        marca: "Toyota",
        modelo: "Corolla",
        asientos: 5,
        año: 2023,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Toyota Corolla 2023 Color Blanco",
    description: "",
    button: true,
  },
  {
    id: "FF5",
    image: "/gallery/F2-Auto-Corolla-negro-Modelo.webp",
    name: "Toyota Yaris",
    details: [
      {
        marca: "Toyota",
        modelo: "Yaris",
        asientos: 5,
        año: 2023,
        motor: "Mecánico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Toyota Yaris 2023 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF6",
    image: "/gallery/F3-Auto-Kia.webp",
    name: "Kia Río",
    details: [
      {
        marca: "Kia",
        modelo: "Rio",
        asientos: 5,
        año: 2020,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Kia Rio 2020 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF7",
    image: "/gallery/F4-Auto-Mazda.webp",
    name: "Mazda3 Hatchback",
    details: [
      {
        marca: "Mazda3",
        modelo: "Hatchback",
        asientos: 5,
        año: 2023,
        motor: "Mecánico",
        combustible: "Gasolina",
      },
    ],
    alt: "Mazda3 Hatchback 2023 Color Rojo",
    description: "",
    button: true,
  },
  {
    id: "FF8",
    image: "/gallery/F5-Auto-Negro-Chevrolet.webp",
    name: "Chevrolet Onix Sedán",
    details: [
      {
        marca: "Chevrolet",
        modelo: "Onix Sedán Turbo",
        asientos: 5,
        año: 2023,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Chevrolet Onix Sedán Turbo 2023 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF9",
    image: "/gallery/F6-Auto-Negro-Hyundai.webp",
    name: "Hyundai Accent",
    details: [
      {
        marca: "Hyundai",
        modelo: "Accent",
        asientos: 5,
        año: 2020,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Hyundai Accent 2020 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF10",
    image: "/gallery/F8-Camioneta-Dodge.webp",
    name: "Dodge Journey",
    details: [
      {
        marca: "Dodge",
        modelo: "Journey",
        asientos: 7,
        año: 2020,
        motor: "Automático",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Dodge Journey 2020 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF11",
    image: "/gallery/F9-auto-corolla-negro.webp",
    name: "Toyota Corolla",
    details: [
      {
        marca: "Toyota",
        modelo: "Corolla",
        asientos: 5,
        año: 2023,
        motor: "Mecánico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Toyota Corolla 2023 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF12",
    image: "/gallery/F10-auto-negro.webp",
    name: "Great Wall New C30",
    details: [
      {
        marca: "Great Wall",
        modelo: "C30",
        asientos: 5,
        año: 2020,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Great Wall C30 Color Negro",
    description: "",
    button: true,
  },
  {
    id: "FF13",
    image: "/gallery/F11-camioneta-chevrolet-gris.webp",
    name: "Chevrolet Tracker Turbo",
    details: [
      {
        marca: "Chevrolet",
        modelo: "Tracker",
        asientos: 5,
        año: 2020,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Chevrolet Tracker Turbo 2020 Color Gris",
    description: "",
    button: true,
  },
  {
    id: "FF14",
    image: "/gallery/F12-camioneta-corolla-blanca.webp",
    name: "Toyota Raizer",
    details: [
      {
        marca: "Toyota",
        modelo: "Raizer",
        asientos: 5,
        año: 2020,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Toyota Raizer 2020 Color Blanco",
    description: "",
    button: true,
  },
  {
    id: "FF15",
    image: "/gallery/Camioneta-Chevrolet-Groove.jpg",
    name: "Chevrolet Groove",
    details: [
      {
        marca: "Chevrolet",
        modelo: "Groove",
        asientos: 5,
        año: 2023,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Chevrolet Groove 2023 Color Blanco",
    description: "",
    button: true,
  },
  {
    id: "FF16",
    image: "/gallery/Camioneta-Jetour-x70.jpg",
    name: "Jetour",
    details: [
      {
        marca: "jetour",
        modelo: "x70",
        asientos: 7,
        año: 2023,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Jetour x70 2023 ",
    description: "",
    button: true,
  },
  {
    id: "FF17",
    image: "/gallery/Camioneta-Toyota-Avanza.jpg",
    name: "Toyota Avanza",
    details: [
      {
        marca: "Toyota",
        modelo: "Avanza",
        asientos: 7,
        año: 2023,
        motor: "Mecanico",
        combustible: "Gasolina",
      },
    ],
    alt: "Camioneta Toyota Avanza 2023 ",
    description: "",
    button: true,
  },
  {
    id: "FF18",
    image: "/gallery/Auto-Hyundai-Elantra.jpg",
    name: "Hyundai Elantra",
    details: [
      {
        marca: "Hyundai",
        modelo: "Elantra",
        asientos: 5,
        año: 2023,
        motor: "Automático",
        combustible: "Gasolina",
      },
    ],
    alt: "Auto Hyundai Elantra 2023 ",
    description: "",
    button: true,
  },
  {
    id: "FF19",
    image: "/gallery/Combi-Toyota-Hiace.jpg",
    name: "Toyota Hiace ",
    details: [
      {
        marca: "Toyota",
        modelo: "Hiace",
        asientos: 15,
        motor: "Mecanico",
        combustible: "Petróleo",
      },
    ],
    alt: "Combi Toyota Hiace ",
    description: "",
    button: true,
  },
  {
    id: "FF20",
    image: "/gallery/Forland.jpg",
    name: "Forland 2 toneladas",
    details: [
      {
        marca: "Forland",
        modelo: "2 toneladas",
        asientos: 5,
        año: 2023,
        motor: "Mecanico",
        combustible: "Petróleo",
      },
    ],
    alt: "Forland Doble cabina 2023 ",
    description: "",
    button: true,
  },
  {
    id: "FF21",
    image: "/gallery/F13-flota-autos.webp",
    name: "Flota de Autos",
    details: [],
    alt: "Flota de Autos de la empresa New Rent Car",
    description:
      "Foto de la exhibición de autos modernos de la flota de New Rent Car en la plaza de armas de Trujillo, La Libertad, Perú.",
    button: false,
  },
  {
    id: "FF22",
    image: "/gallery/F14-grupo-autos.webp",
    name: "Autos Modernos",
    details: [],
    alt: "Autos Modernos de la flota New Rent Car",
    description:
      "Encuentra el auto perfecto para ti, contamos con una flota de autos modernos y con estilos que van contigo.",
    button: false,
  },
  {
    id: "FF23",
    image: "/gallery/F15-grupo-camionetas.webp",
    name: "Camionetas New Rent Car",
    details: [],
    alt: "Foto de Camionetas de New Rent Car",
    description:
      "Foto de la Exhibición de la flota de camionetas New Rent Car en la plaza de Armas de Trujillo en Perú.",
    button: false,
  },
  {
    id: "FF24",
    image: "/gallery/F16-grupo-full.webp",
    name: "Flota New Rent Car",
    details: [],
    alt: "Foto de la flota de la empresa New Rent Car",
    description:
      "Exhibición de la flota New Rent Car en la plaza de armas de Trujillo, La Libertad, Perú.",
    button: false,
  },
  {
    id: "FF25",
    image: "/gallery/F17-nuestro-equipo.webp",
    name: "Equipo New Rent Car E.I.R.L.",
    details: [],
    alt: "Equipo de la empresa New Rent Car",
    description:
      "Foto del equipo que conforma la familia New Rent Car E.I.R.L. celebrando un aniversario más, de la creación de la empresa, junto a su fundador Luis Cuenca.",
    button: false,
  },
]
