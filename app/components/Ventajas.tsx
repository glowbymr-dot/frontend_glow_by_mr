import { Sparkles } from "lucide-react";
import { beneficios } from "../helpers/data/home";

const Ventajas = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 me-2" />
            Ventajas
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#664C3A" }}
          >
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos la mejor experiencia de compra con beneficios exclusivos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-linear-to-br from-[#A0714C]/10 to-[#B17953]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon
                    className="w-10 h-10"
                    style={{ color: beneficio.color }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#664C3A" }}
                >
                  {beneficio.title}
                </h3>
                <p className="text-gray-600">{beneficio.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
