import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/app/components/IconsRedes";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const infoContacto = [
  {
    icon: MapPin,
    title: "Visítanos",
    details: ["Calle Principal #123", "Centro Histórico, Ciudad"],
    color: "#A0714C",
    bgGradient: "from-[#A0714C]/10 to-[#B17953]/10",
  },
  {
    icon: Phone,
    title: "Llámanos",
    details: ["+504 1234-5678", "+504 8765-4321"],
    color: "#10b981",
    bgGradient: "from-emerald-100 to-green-100",
  },
  {
    icon: Mail,
    title: "Escríbenos",
    details: ["info@joyeria.com", "ventas@joyeria.com"],
    color: "#3b82f6",
    bgGradient: "from-blue-100 to-cyan-100",
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun-Vie: 9am - 6pm", "Sáb: 10am - 2pm"],
    color: "#f59e0b",
    bgGradient: "from-orange-100 to-amber-100",
  },
];

export const redesSociales = [
  {
    icon: FacebookIcon,
    nombre: "Facebook",
    url: "#",
    color: "#1877f2",
  },
  {
    icon: InstagramIcon,
    nombre: "Instagram",
    url: "#",
    color: "#e4405f",
  },
  {
    icon: TwitterIcon,
    nombre: "Twitter",
    url: "#",
    color: "#1da1f2",
  },
];
