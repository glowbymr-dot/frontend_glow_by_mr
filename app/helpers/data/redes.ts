import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
} from "@/app/components/IconsRedes";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const infoContacto = [
  {
    icon: MapPin,
    title: "Visítanos",
    details: [`${process.env.NEXT_PUBLIC_DIRECCION}`],
    color: "#A0714C",
    bgGradient: "from-[#A0714C]/10 to-[#B17953]/10",
  },
  {
    icon: Phone,
    title: "Llámanos",
    details: [`+504 ${process.env.NEXT_PUBLIC_PHONE}`],
    color: "#10b981",
    bgGradient: "from-emerald-100 to-green-100",
  },
  {
    icon: Mail,
    title: "Escríbenos",
    details: [`${process.env.NEXT_PUBLIC_EMAIL}`],
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
    url: `${process.env.NEXT_PUBLIC_FACEBOOK}`,
    color: "#1877f2",
  },
  {
    icon: InstagramIcon,
    nombre: "Instagram",
    url: `${process.env.NEXT_PUBLIC_INSTAGRAM}`,
    color: "#e4405f",
  },
  {
    icon: TikTokIcon,
    nombre: "TikTok",
    url: `${process.env.NEXT_PUBLIC_TIKTOK}`,
    color: "#25F4EE",
  },
];
