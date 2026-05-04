"use client";
import { additionalTerms, sections } from "@/app/helpers/data/terminos";
import { FileText, Shield } from "lucide-react";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-[#664C3A] text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <FileText className="w-4 h-4 mr-2" />
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Por favor, lee cuidadosamente estos términos antes de realizar tu
              compra
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#A0714C]/10 rounded-lg flex items-center justify-center shrink-0">
                    <section.icon className="w-5 h-5 text-[#A0714C]" />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-bold mb-3"
                      style={{ color: "#664C3A" }}
                    >
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-linear-to-r from-[#A0714C]/5 to-[#B17953]/5 rounded-2xl p-8 mb-12">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "#664C3A" }}
            >
              <Shield className="w-6 h-6" />
              Términos Adicionales
            </h2>
            <ul className="space-y-3">
              {additionalTerms.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#A0714C] mt-1">•</span>
                  <span className="text-gray-600">{term}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="text-center">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#664C3A" }}
              >
                ¿Preguntas sobre estos términos?
              </h3>
              <p className="text-gray-600 mb-4">
                Para asuntos legales, contáctanos a:
              </p>
              <p className="text-sm text-gray-500">
                📧 {process.env.NEXT_PUBLIC_EMAIL}
                <br />
                📞 +1 (555) 123-4567
                <br />
                📍 Calle Principal 123, Ciudad
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <p className="text-sm text-yellow-800">
              ⚖️ Al utilizar nuestro sitio web y realizar una compra, aceptas
              todos los términos y condiciones aquí establecidos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
