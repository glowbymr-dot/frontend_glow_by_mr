import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Inicio = () => {
  return (
    <div className="relative min-h-150 w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/mejores-marcas-de-joyeria.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-150 flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bienvenido a Glow By MR
          </h1>

          <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            Explora una colección única de joyas que reflejan sofisticación y
            distinción. Diseños cuidadosamente elaborados para resaltar tu
            esencia con calidad y estilo incomparables.
          </p>

          <div className="flex justify-center">
            <Link
              href="/productos"
              className="shadow rounded-2xl p-4 flex items-center group gap-2 bg-[#A0714C] text-white hover:bg-[#B17953] transition-all duration-300"
            >
              Explorar Productos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
