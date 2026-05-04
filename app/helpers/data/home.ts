import { Headphones, RefreshCw, Shield, Truck } from "lucide-react";

export const beneficios = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En compras superiores a L. 1,500",
    color: "#A0714C",
  },
  {
    icon: Shield,
    title: "Garantía Garantizada",
    description: "30 días de garantía",
    color: "#10b981",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Atención al cliente",
    color: "#3b82f6",
  },
  {
    icon: RefreshCw,
    title: "Devoluciones Fáciles",
    description: "30 días para devolver",
    color: "#f59e0b",
  },
];

export const testimonios = [
  {
    id: 1,
    nombre: "María González",
    rating: 5,
    comentario:
      "Excelente calidad, los accesorios son hermosos y llegaron rápidamente.",
    imagen: "/avatars/maria.jpg",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    rating: 5,
    comentario: "Muy buena atención al cliente, resolvieron todas mis dudas.",
    imagen: "/avatars/carlos.jpg",
  },
  {
    id: 3,
    nombre: "Ana Martínez",
    rating: 4,
    comentario: "Productos de gran calidad, volveré a comprar sin dudarlo.",
    imagen: "/avatars/ana.jpg",
  },
];

export const ofertasEspeciales = [
  {
    id: 1,
    titulo: "Cyber Monday",
    descripcion: "Hasta 50% descuento",
    imagen: "/ofertas/cyber-monday.jpg",
    color: "bg-red-500",
  },
  {
    id: 2,
    titulo: "Black Friday",
    descripcion: "Ofertas imperdibles",
    imagen: "/ofertas/black-friday.jpg",
    color: "bg-gray-800",
  },
  {
    id: 3,
    titulo: "Navidad",
    descripcion: "Regalos especiales",
    imagen: "/ofertas/navidad.jpg",
    color: "bg-green-600",
  },
];
