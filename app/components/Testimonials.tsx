import { testimonios } from "../helpers/data/home";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            <Star className="w-4 h-4 me-2" />
            Testimonios
          </span>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
            style={{ color: "#664C3A" }}
          >
            Lo que dicen nuestros clientes
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-[#A0714C] to-[#B17953] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  {testimonio.nombre[0]}
                </div>

                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    {testimonio.nombre}
                  </h4>

                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* COMMENT */}
              <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
                "{testimonio.comentario}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
