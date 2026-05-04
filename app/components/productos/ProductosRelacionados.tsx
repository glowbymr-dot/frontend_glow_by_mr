import EmptyProducts from "./EmptyProducts";
import CardProductos from "./CardProductos";
import { Producto } from "@/app/api/productos/interfaces/response-productos.interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  productosRelacionados: Producto[];
  categoria: string;
}

const ProductosRelacionados = ({ productosRelacionados, categoria }: Props) => {
  if (!productosRelacionados || productosRelacionados.length === 0) {
    return (
      <div className="mt-16">
        <div className="flex justify-center mb-5">
          <h1 className="text-xl font-bold text-[#A0714C]">
            Productos Relacionados
          </h1>
        </div>
        <EmptyProducts
          message="No hay productos relacionados disponibles"
          categoryName={categoria ?? ""}
        />
      </div>
    );
  }

  return (
    <div className="mt-16 px-4">
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl font-bold text-[#A0714C] relative">
          Productos Relacionados
          <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#A0714C] to-transparent"></div>
        </h1>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full relative group"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {productosRelacionados.map((producto, index) => (
            <CarouselItem
              key={producto.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1 h-full">
                <CardProductos producto={producto} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {productosRelacionados.length > 4 && (
          <>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-white hover:bg-[#A0714C] hover:text-white border-[#A0714C] text-[#A0714C] transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-white hover:bg-[#A0714C] hover:text-white border-[#A0714C] text-[#A0714C] transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </>
        )}
      </Carousel>

      {productosRelacionados.length > 4 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({
            length: Math.ceil(productosRelacionados.length / 4),
          }).map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#A0714C] transition-colors duration-300"
              onClick={() => {
                const carousel = document.querySelector(
                  "[data-radix-carousel]",
                );
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductosRelacionados;
