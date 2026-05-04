import { Sparkles } from "lucide-react";
import { beneficios } from "../helpers/data/home";

const Ventajas = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 me-2" />
            Ventajas
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
            style={{ color: "#664C3A" }}
          >
            ¿Por qué elegirnos?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Ofrecemos la mejor experiencia de compra con beneficios exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;

            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300 px-2 sm:px-0"
              >
                <div className="bg-linear-to-br from-[#A0714C]/10 to-[#B17953]/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    style={{ color: beneficio.color }}
                  />
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: "#664C3A" }}
                >
                  {beneficio.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
