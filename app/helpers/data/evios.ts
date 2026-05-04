import { Clock, MapPin, Package, Truck } from "lucide-react";

export const shippingInfo = [
  {
    icon: Clock,
    title: "Tiempos de Entrega",
    content: [
      "• Envío Express (2-3 días hábiles)",
      "• Envío Estándar (5-7 días hábiles)",
      "• Envío Nacional (3-5 días hábiles)",
    ],
  },
  {
    icon: Truck,
    title: "Tipos de Envío",
    content: [
      "• Envío a domicilio con seguimiento",
      "• Recogida en punto de entrega",
    ],
  },
  {
    icon: MapPin,
    title: "Cobertura Geográfica",
    content: [
      "• Envíos a todo el país",
      "• Zonas remotas pueden tener tiempos extendidos",
    ],
  },
  {
    icon: Package,
    title: "Embalaje",
    content: [
      "• Embalaje de lujo incluido",
      "• Estuche protector para joyas",
      "• Bolsa de tela anti-manchas",
    ],
  },
];

export const shippingRates = [
  { range: "Compras menores a L50", cost: "L5.99 - Envío Estándar" },
  { range: "Compras entre L50 - L100", cost: "L3.99 - Envío Estándar" },
  { range: "Compras mayores a L100", cost: "Envío Gratuito" },
  { range: "Envío Express", cost: "+L8.99 adicional" },
];
