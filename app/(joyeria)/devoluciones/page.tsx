"use client";
import {
  nonReturnableItems,
  returnSteps,
} from "@/app/helpers/data/devoluciones";
import {
  RefreshCw,
  Calendar,
  AlertCircle,
  CheckCircle,
  Package,
  CreditCard,
  Sparkles,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function DevolucionesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-linear-to-r from-[#8B5E3C] to-[#A0714C] text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Devoluciones
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Política de Devoluciones
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Tu satisfacción es nuestra prioridad. Devoluciones fáciles y sin
              complicaciones
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-linear-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 mb-12 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Garantía de Satisfacción
            </h2>
            <p className="text-gray-600">
              Ofrecemos{" "}
              <span className="font-bold text-[#A0714C]">30 días</span> para que
              puedas devolver tu producto si no estás completamente satisfecho
            </p>
          </div>

          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: "#664C3A" }}
          >
            ¿Cómo hacer una devolución?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {returnSteps.map((step) => (
              <div key={step.step} className="relative">
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-0.5 bg-[#A0714C]/30"></div>
                )}
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#A0714C] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#664C3A" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {step.description}
                  </p>
                  <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {step.timeframe}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Productos no retornables
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {nonReturnableItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "#664C3A" }}
            >
              <Shield className="w-6 h-6" />
              Condiciones para Devoluciones
            </h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Calendar className="w-5 h-5 text-[#A0714C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Plazo de devolución
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tienes 30 días naturales desde la fecha de recepción para
                    solicitar una devolución.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Package className="w-5 h-5 text-[#A0714C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Estado del producto
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El producto debe estar en las mismas condiciones en que lo
                    recibiste, sin uso, con todas sus etiquetas y en su empaque
                    original.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CreditCard className="w-5 h-5 text-[#A0714C] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-800">Reembolso</h3>
                  <p className="text-gray-600 text-sm">
                    El reembolso se realizará a través del mismo método de pago
                    utilizado en la compra. Los gastos de envío originales no
                    son reembolsables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-linear-to-r from-[#A0714C]/10 to-[#B17953]/10 rounded-2xl p-8">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#664C3A" }}
            >
              ¿Necesitas iniciar una devolución?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos y te ayudaremos con el proceso
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#A0714C] hover:bg-[#8B5E3C] text-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              Solicitar Devolución
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
