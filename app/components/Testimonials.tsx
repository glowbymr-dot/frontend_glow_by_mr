import { testimonios } from "../helpers/data/home";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Star className="w-4 h-4 me-2" />
            Testimonios
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#664C3A" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en nosotros
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#A0714C] to-[#B17953] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonio.nombre[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonio.nombre}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonio.comentario}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
