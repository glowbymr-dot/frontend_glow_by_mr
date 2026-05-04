"use client";

import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CardCategorias from "@/app/components/categorias/CardCategorias";
import CategoriesSkeleton from "@/app/components/categorias/CategoriesSkeleton";
import { useEffect, useState } from "react";
import { ResponseCategoriasInterface } from "@/app/api/categorias/interfaces/response-categorias.interface";

interface Props {
  categorias: ResponseCategoriasInterface | undefined;
  isLoading: boolean;
}

const CategoriasDestacadas = ({ categorias, isLoading }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  if (isLoading) {
    return (
      <section className="py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-12 w-64 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="h-6 w-48 bg-gray-200 rounded-lg mx-auto"></div>
            </div>
          </div>
          <CategoriesSkeleton />
        </div>
      </section>
    );
  }

  const categoriasArray = categorias?.data || [];

  if (categoriasArray.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 me-2" />
            Categorías
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#664C3A" }}
          >
            Explora por{" "}
            <span className="bg-linear-to-r from-[#A0714C] to-[#B17953] bg-clip-text text-transparent">
              Categorías
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Encuentra el accesorio perfecto para cada ocasión
          </p>
        </div>

        <div className="relative group px-4 md:px-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent>
              {categoriasArray.map((categoria: any, index: number) => (
                <CarouselItem
                  key={categoria.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2">
                    <CardCategorias categoria={categoria} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 rounded-full bg-white shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#A0714C] hover:text-white" />
            <CarouselNext className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 rounded-full bg-white shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#A0714C] hover:text-white" />
          </Carousel>

          {count > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index + 1
                      ? "w-8 bg-[#A0714C]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir a la categoría ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriasDestacadas;
