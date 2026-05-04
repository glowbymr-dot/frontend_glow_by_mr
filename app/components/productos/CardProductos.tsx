import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Tag } from "lucide-react";
import { getStrapiImage } from "@/app/helpers/funciones/getStrapiImage";
import { Producto } from "@/app/api/productos/interfaces/response-productos.interface";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

interface Props {
  producto: Producto;
}

const CardProductos = ({ producto }: Props) => {
  const router = useRouter();
  const tieneOferta =
    producto.oferta && producto.offer_price && producto.offer_price > 0;

  const precioActual = tieneOferta ? producto.offer_price : producto.price;
  const precioOriginal = producto.price;

  return (
    <Card
      key={producto.id}
      className="min-w-72 sm:min-w-75 shrink-0 group relative"
    >
      {tieneOferta && (
        <div className="absolute top-2 right-2 z-10">
          <Badge className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 shadow-lg">
            <Tag className="h-3 w-3 mr-1" />
            Oferta
          </Badge>
        </div>
      )}

      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        {producto.images && producto.images[0] ? (
          <Image
            src={getStrapiImage(producto.images[0].url)}
            alt={producto.productName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <Image
            src="/images/product_not_found.png"
            alt={producto.productName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        )}
      </div>

      <CardContent className="p-4">
        <h3
          className="font-semibold text-lg mb-2 line-clamp-1"
          style={{ color: "#664C3A" }}
        >
          {producto.productName}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            {tieneOferta ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-red-600">
                    L{precioActual.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    L{precioOriginal.toFixed(2)}
                  </span>
                </div>
                <div className="text-xs text-green-600 font-semibold">
                  Ahorra L{(precioOriginal - precioActual).toFixed(2)}
                </div>
              </>
            ) : (
              <span className="text-2xl font-bold text-[#A0714C]">
                L{precioActual.toFixed(2)}
              </span>
            )}
          </div>

          <span className="text-sm text-gray-500">{producto.origin}</span>
        </div>

        <Button
          onClick={() => router.push(`/productos/${producto.slug}`)}
          className="w-full bg-[#A0714C] hover:bg-[#B17953] gap-2 hover:cursor-pointer"
        >
          <ShoppingBag className="h-4 w-4" />
          Detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardProductos;
