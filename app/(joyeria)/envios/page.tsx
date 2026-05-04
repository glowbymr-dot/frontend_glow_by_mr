"use client";
import { shippingInfo, shippingRates } from "@/app/helpers/data/evios";
import { Truck, Shield, CreditCard } from "lucide-react";

export default function EnviosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-linear-to-r from-[#664C3A] to-[#A0714C] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <Truck className="w-4 h-4 mr-2" />
              Envíos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Política de Envíos
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Entregamos tus joyas con la máxima seguridad y cuidado en todo el
              mundo
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {shippingInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#A0714C]/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#A0714C]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#664C3A" }}
                >
                  {info.title}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {info.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="bg-linear-to-r from-[#A0714C] to-[#B17953] px-6 py-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Tarifas de Envío
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {shippingRates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-700 font-medium">
                      {rate.range}
                    </span>
                    <span className="text-[#A0714C] font-semibold">
                      {rate.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#A0714C]/5 rounded-2xl p-8 mb-12">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-2"
              style={{ color: "#664C3A" }}
            >
              <Shield className="w-6 h-6" />
              Información Importante
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Seguimiento de Pedidos
                </h3>
                <p className="text-gray-600 text-sm">
                  Recibirás un número de seguimiento por email cuando tu pedido
                  sea enviado. Puedes rastrear tu paquete en todo momento a
                  través de nuestra web o la página de la empresa de mensajería.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Firma de Recepción
                </h3>
                <p className="text-gray-600 text-sm">
                  Todos los pedidos requieren firma a la entrega para garantizar
                  la seguridad de tus joyas. Si no estás disponible, se dejará
                  un aviso para coordinar una nueva entrega.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Retrasos en la Entrega
                </h3>
                <p className="text-gray-600 text-sm">
                  En casos excepcionales (clima adverso, aduanas, etc.), los
                  tiempos de entrega pueden extenderse. Te mantendremos
                  informado de cualquier cambio significativo.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Dirección Incorrecta
                </h3>
                <p className="text-gray-600 text-sm">
                  Es responsabilidad del cliente proporcionar la dirección
                  correcta. Cargos adicionales por reenvío por dirección
                  incorrecta serán asumidos por el cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p className="mt-2">
              Para consultas específicas sobre tu pedido, contáctanos a
              {process.env.NEXT_PUBLIC_EMAIL}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
