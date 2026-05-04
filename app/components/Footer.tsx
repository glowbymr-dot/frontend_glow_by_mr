"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Heart,
  Shield,
  Truck,
  CreditCard,
} from "lucide-react";

const Footer = () => {
  const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );

  const enlacesUtiles = [
    { nombre: "Sobre Nosotros", href: "/nosotros" },
    { nombre: "Contacto", href: "/contacto" },
    { nombre: "Preguntas Frecuentes", href: "/faq" },
    { nombre: "Política de Envíos", href: "/envios" },
    { nombre: "Política de Devoluciones", href: "/devoluciones" },
    { nombre: "Términos y Condiciones", href: "/terminos" },
  ];

  const metodosPago = [
    { nombre: "PayPal", icono: "💰" },
    { nombre: "Transferencia", icono: "🏦" },
  ];

  const beneficios = [
    { icono: Truck, texto: "Envío gratis en compras > L 2,000" },
    { icono: Shield, texto: "Garantía de autenticidad" },
    { icono: CreditCard, texto: "Pagos 100% seguros" },
    { icono: Heart, texto: "Atención personalizada" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-gray-800 mb-12">
          {beneficios.map((beneficio, index) => {
            const Icono = beneficio.icono;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-r from-[#A0714C] to-[#B17953] rounded-full flex items-center justify-center shrink-0">
                  <Icono className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">{beneficio.texto}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#A0714C]" />
              <h2 className="text-2xl font-bold bg-linear-to-r from-[#A0714C] to-[#B17953] bg-clip-text text-transparent">
                Joyería Elegance
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Creando momentos inolvidables desde 2003. Joyas únicas y elegantes
              diseñadas para celebrar los momentos más especiales de tu vida.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877f2] transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-linear-to-r hover:from-[#f09433] hover:to-[#bc1888] transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1da1f2] transition-colors duration-300"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#A0714C]">
              Enlaces Útiles
            </h3>
            <ul className="space-y-2">
              {enlacesUtiles.map((enlace, index) => (
                <li key={index}>
                  <Link
                    href={enlace.href}
                    className="text-gray-400 hover:text-[#A0714C] transition-colors duration-300 text-sm"
                  >
                    {enlace.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#A0714C]">
              Contacto
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#A0714C] shrink-0" />
                <span>Calle Principal #123, Centro Histórico, CDMX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#A0714C] shrink-0" />
                <span>+52 (55) 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#A0714C] shrink-0" />
                <span>info@joyeriaelegancia.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-[#A0714C] shrink-0" />
                <span>Lun-Vie: 10am - 7pm | Sáb: 11am - 5pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {metodosPago.map((metodo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg"
              >
                <span className="text-xl">{metodo.icono}</span>
                <span className="text-xs text-gray-400">{metodo.nombre}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Glow By MR. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/525512345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20B859] transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.562 1.112 3.65l-1.157 3.927 4.045-1.126c1.033.566 2.18.865 3.348.865 3.18 0 5.766-2.587 5.766-5.768 0-3.18-2.586-5.766-5.766-5.766v.002zm2.232 7.776c-.308.155-.772.461-.853.628-.08.168-.134.27-.27.404-.135.135-.22.097-.461-.038-.241-.135-1.062-.525-1.462-.81-.4-.285-.791-.752-.864-1.134-.073-.382.018-.55.117-.737.099-.186.189-.248.27-.372.081-.124.108-.186.162-.31.054-.124.027-.248-.013-.372-.04-.124-.288-.694-.394-.949-.104-.253-.216-.212-.297-.216-.077-.004-.165-.004-.253-.004-.088 0-.23.033-.351.166-.121.134-.464.453-.464 1.105 0 .652.473 1.28.54 1.368.067.088.935 1.428 2.264 2.003.316.137.563.219.755.28.317.098.604.084.831.051.254-.036.762-.311.868-.612.106-.301.106-.559.074-.612-.032-.054-.119-.088-.247-.123z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
