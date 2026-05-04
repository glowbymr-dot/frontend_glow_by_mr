"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { infoContacto, redesSociales } from "@/app/helpers/data/redes";

const ContactoJoyeriaPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-linear-to-r from-[#664C3A] to-[#A0714C] text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Contáctanos</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Tienes alguna pregunta?
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-95">
            Estamos aquí para ayudarte. Cuéntanos tus dudas y te responderemos
            lo antes posible.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoContacto.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-linear-to-br ${item.bgGradient} rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#664C3A" }}
                  >
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#664C3A" }}
                >
                  Envíanos un{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A0714C] to-[#B17953]">
                    mensaje
                  </span>
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y te contactaremos a la brevedad.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ¡Mensaje enviado con éxito! Te responderemos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-gray-700 mb-2 block">
                    Nombre completo *
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 mb-2 block">
                    Correo electrónico *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="telefono"
                    className="text-gray-700 mb-2 block"
                  >
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+504 1234-5678"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-gray-700 mb-2 block">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#A0714C] to-[#B17953] hover:from-[#8B613B] hover:to-[#9A6A45] text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  Síguenos en redes sociales
                </p>
                <div className="flex justify-center gap-4">
                  {redesSociales.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                        style={{ backgroundColor: social.color }}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full">
                <div className="h-64 md:h-80 lg:h-96 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.123456789!2d-87.123456!3d14.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f8f8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sTegucigalpa!5e0!3m2!1ses!2shn!4v1699999999999!5m2!1ses!2shn"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la joyería"
                  ></iframe>
                </div>
                <div className="p-6 bg-linear-to-r from-[#664C3A]/5 to-[#A0714C]/5">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#664C3A" }}
                  >
                    ¿Cómo llegar?
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Estamos ubicados en el corazón de la ciudad, fácil acceso en
                    transporte público y privado.
                  </p>
                  <p className="text-gray-600">
                    Estacionamiento disponible para nuestros clientes.
                  </p>
                  <Button
                    variant="link"
                    className="mt-3 text-[#A0714C] hover:text-[#B17953] p-0"
                    onClick={() =>
                      window.open("https://maps.google.com", "_blank")
                    }
                  >
                    Ver ruta en Google Maps →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-[#A0714C] mx-auto mb-4 opacity-60" />
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#664C3A" }}
            >
              ¿Prefieres contactarnos directamente?
            </h2>
            <p className="text-gray-600 mb-8">
              También puedes llamarnos o enviarnos un WhatsApp para una atención
              más rápida
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-5 md:py-6 rounded-xl text-base md:text-lg gap-2"
                onClick={() => (window.location.href = "tel:+50412345678")}
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </Button>
              <Button
                className="bg-[#25D366] hover:bg-[#20B859] text-white px-6 md:px-8 py-5 md:py-6 rounded-xl text-base md:text-lg gap-2"
                onClick={() =>
                  window.open("https://wa.me/50412345678", "_blank")
                }
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.562 1.112 3.65l-1.157 3.927 4.045-1.126c1.033.566 2.18.865 3.348.865 3.18 0 5.766-2.587 5.766-5.768 0-3.18-2.586-5.766-5.766-5.766v.002zm2.232 7.776c-.308.155-.772.461-.853.628-.08.168-.134.27-.27.404-.135.135-.22.097-.461-.038-.241-.135-1.062-.525-1.462-.81-.4-.285-.791-.752-.864-1.134-.073-.382.018-.55.117-.737.099-.186.189-.248.27-.372.081-.124.108-.186.162-.31.054-.124.027-.248-.013-.372-.04-.124-.288-.694-.394-.949-.104-.253-.216-.212-.297-.216-.077-.004-.165-.004-.253-.004-.088 0-.23.033-.351.166-.121.134-.464.453-.464 1.105 0 .652.473 1.28.54 1.368.067.088.935 1.428 2.264 2.003.316.137.563.219.755.28.317.098.604.084.831.051.254-.036.762-.311.868-.612.106-.301.106-.559.074-.612-.032-.054-.119-.088-.247-.123z" />
                </svg>
                WhatsApp
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              Disponible de lunes a viernes de 9am a 6pm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoJoyeriaPage;
