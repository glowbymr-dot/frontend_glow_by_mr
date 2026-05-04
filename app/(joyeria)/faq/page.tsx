"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { faqs } from "@/app/helpers/data/faqs";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...new Set(faqs.map((faq) => faq.category))];

  const filteredFaqs =
    selectedCategory === "Todos"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-[#664C3A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <HelpCircle className="w-4 h-4 mr-2" />
              Ayuda
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Encuentra respuestas a las dudas más comunes sobre nuestros
              productos y servicios
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#A0714C] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const actualIndex = filteredFaqs.indexOf(faq);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(
                        openIndex === actualIndex ? null : actualIndex,
                      )
                    }
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A0714C] transition-transform duration-300 shrink-0 ${
                        openIndex === actualIndex ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIndex === actualIndex ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-linear-to-r from-[#A0714C]/10 to-[#B17953]/10 rounded-2xl p-8">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#664C3A" }}
            >
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos directamente y te ayudaremos con tu consulta
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#A0714C] hover:bg-[#8B5E3C] text-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              Contactar Soporte
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
