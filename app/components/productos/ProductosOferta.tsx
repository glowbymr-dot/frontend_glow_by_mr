import { ResponseProductosInterface } from "@/app/api/productos/interfaces/response-productos.interface";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SkeletonProducts from "./SkeletonProducts";
import { Sparkles } from "lucide-react";
import CardProductos from "./CardProductos";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  productos: ResponseProductosInterface | undefined;
  isLoading: boolean;
}

const ProductosOferta = ({ productos, isLoading }: Props) => {
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
    return <SkeletonProducts />;
  }

  const productosArray = productos?.data || [];

  if (productosArray.length === 0) {
    return (
      <section className="py-16 px-4 md:px-8 bg-linear-to-br">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 me-2" />
              Productos
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#664C3A" }}
            >
              Productos En Oferta
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Los más destacado de la temporada
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500">
              No hay productos en oferta disponibles
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center bg-[#A0714C]/10 text-[#A0714C] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 me-2" />
            Ofertas
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#664C3A" }}
          >
            Productos En Oferta
          </h2>
        </div>

        <div className="relative group px-4 md:px-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {productosArray.map((producto: any) => (
                <CarouselItem
                  key={producto.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-2">
                    <CardProductos producto={producto} />
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
                  aria-label={`Ir a la página ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductosOferta;
