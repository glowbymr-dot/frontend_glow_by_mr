"use client";

import {
  Sparkles,
  Gem,
  Shield,
  Clock,
  Award,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NosotrosJoyeriaPage = () => {
  const valores = [
    {
      icon: Gem,
      title: "Calidad Superior",
      description:
        "Seleccionamos los mejores materiales y gemas para crear piezas únicas que perduran en el tiempo.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Artesanía Auténtica",
      description:
        "Cada joya es elaborada a mano por nuestros artesanos expertos con técnicas tradicionales.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Compromiso y Confianza",
      description:
        "Más de 20 años brindando honestidad, transparencia y calidad a nuestros clientes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Diseños Exclusivos",
      description:
        "Creaciones únicas que no encontrarás en ningún otro lugar, diseñadas para destacar.",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const hitos = [
    {
      año: "2003",
      titulo: "Fundación",
      descripcion:
        "Abrimos nuestras primeras puertas en el corazón de la ciudad.",
    },
    {
      año: "2008",
      titulo: "Expansión",
      descripcion: "Inauguramos nuestra segunda sucursal y taller propio.",
    },
    {
      año: "2015",
      titulo: "Reconocimiento",
      descripcion: "Premio a la Mejor Joyería Artesanal del país.",
    },
    {
      año: "2024",
      titulo: "Innovación",
      descripcion:
        "Lanzamos nuestra tienda en línea con envíos a todo el país.",
    },
  ];

  const equipo = [
    {
      nombre: "María González",
      puesto: "Fundadora & Diseñadora Principal",
      descripcion:
        "Con más de 25 años de experiencia en diseño de joyas, María lidera nuestra visión creativa.",
      color: "from-rose-500 to-orange-500",
    },
    {
      nombre: "Carlos Rodríguez",
      puesto: "Maestro Orfebre",
      descripcion:
        "Especialista en técnicas tradicionales de orfebrería y tallado de gemas.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      nombre: "Ana Martínez",
      puesto: "Directora de Atención al Cliente",
      descripcion:
        "Asegura que cada cliente reciba una experiencia personalizada y memorable.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-linear-to-r from-[#664C3A] to-[#8B6749] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="diamonds"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <polygon points="10,0 20,10 10,20 0,10" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#diamonds)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Nuestra Historia</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Creando{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FFA500]">
              momentos
            </span>{" "}
            inolvidables
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Transformando sueños en joyas únicas que celebran el amor, la vida y
            los momentos más especiales.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-linear-to-r from-[#A0714C] to-[#B17953] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#664C3A" }}
              >
                Nuestra Misión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Crear joyas excepcionales que capturen la esencia de cada
                persona y celebren sus momentos más importantes. Nos
                comprometemos a ofrecer calidad incomparable, diseños únicos y
                un servicio personalizado que supere las expectativas de
                nuestros clientes.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-linear-to-r from-[#A0714C] to-[#B17953] rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#664C3A" }}
              >
                Nuestra Visión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser la joyería de referencia en el país, reconocida por nuestra
                excelencia en diseño, calidad artesanal y compromiso con la
                satisfacción de nuestros clientes. Aspiramos a expandir nuestro
                legado de amor y belleza a través de generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 me-2" />
              Nuestros Valores
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#664C3A" }}
            >
              Lo que nos{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A0714C] to-[#B17953]">
                define
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Principios que guían cada joya que creamos y cada cliente que
              atendemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <div
                  key={index}
                  className="group bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div
                    className={`w-20 h-20 bg-linear-to-r ${valor.color} rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#664C3A" }}
                  >
                    {valor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-linear-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Clock className="w-4 h-4 me-2" />
              Nuestra Trayectoria
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#664C3A" }}
            >
              Más de{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A0714C] to-[#B17953]">
                20 años
              </span>{" "}
              de historia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Un viaje lleno de pasión, dedicación y momentos especiales
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-[#A0714C] to-[#B17953] h-full hidden md:block"></div>
            {hitos.map((hito, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:order-2"}`}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="inline-block px-4 py-1 bg-linear-to-r from-[#A0714C] to-[#B17953] text-white rounded-full font-bold mb-3">
                      {hito.año}
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#664C3A" }}
                    >
                      {hito.titulo}
                    </h3>
                    <p className="text-gray-600">{hito.descripcion}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-linear-to-r from-[#A0714C] to-[#B17953] rounded-full items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Heart className="w-4 h-4 me-2" />
              Talento Humano
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#664C3A" }}
            >
              El{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A0714C] to-[#B17953]">
                corazón
              </span>{" "}
              de nuestra joyería
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Personas apasionadas que hacen posible crear experiencias únicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipo.map((miembro, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-32 bg-linear-to-r ${miembro.color}`}></div>
                <div className="p-6 text-center">
                  <div className="w-28 h-28 bg-linear-to-r from-[#A0714C] to-[#B17953] rounded-full mx-auto -mt-16 mb-4 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-4xl font-bold text-white">
                      {miembro.nombre.charAt(0)}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#664C3A" }}
                  >
                    {miembro.nombre}
                  </h3>
                  <p className="text-[#A0714C] font-medium mb-3">
                    {miembro.puesto}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {miembro.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-linear-to-r from-[#664C3A] to-[#8B6749] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Listo para encontrar tu joya perfecta?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Déjanos ser parte de tu historia y crear juntos momentos
            inolvidables
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white text-[#664C3A] hover:bg-gray-100 px-8 py-6 rounded-xl text-lg font-semibold group"
              onClick={() => (window.location.href = "/productos")}
            >
              Ver Colecciones
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#664C3A] px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300"
              onClick={() => (window.location.href = "/contacto")}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosJoyeriaPage;
