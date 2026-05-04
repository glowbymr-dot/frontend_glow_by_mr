import {
  Category,
  Producto,
} from "@/app/api/productos/interfaces/response-productos.interface";
import { beneficios } from "@/app/helpers/data/home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Share2, ShoppingCart, Tag, Zap } from "lucide-react";
import Link from "next/link";

interface Props {
  category: Category;
  product: Producto;
}

const DetailsProduct = ({ category, product }: Props) => {
  const tieneOferta =
    product.oferta && product.offer_price && product.offer_price > 0;

  const precioActual = tieneOferta ? product.offer_price : product.price;
  const precioOriginal = product.price;

  const porcentajeDescuento = tieneOferta
    ? Math.round(((precioOriginal - precioActual) / precioOriginal) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/categorias/${category?.slug}`}
          className="text-sm text-[#A0714C] hover:underline"
        >
          {category?.categoryName}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
          {product.productName}
        </h1>
      </div>

      <div className="space-y-2">
        {tieneOferta ? (
          <>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl md:text-4xl font-bold text-red-600">
                L. {precioActual.toFixed(2)}
              </span>
              <span className="text-xl md:text-2xl text-gray-400 line-through">
                L. {precioOriginal.toFixed(2)}
              </span>
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-3 py-1">
                <Tag className="h-3 w-3 mr-1" />-{porcentajeDescuento}%
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                ¡Ahorra L. {(precioOriginal - precioActual).toFixed(2)}!
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl md:text-4xl font-bold text-[#A0714C]">
                L. {precioActual.toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">
              ¡Precio competitivo!
            </p>
          </>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {product.description?.substring(0, 200)}
        {product.description?.length > 200 && "..."}
      </p>

      <div className="space-y-3">
        <div className="flex gap-4">
          <p className="text-sm text-muted-foreground">Disponibles:</p>
          {product.stock === 0 ? (
            <Badge variant={"destructive"}>No Disponible</Badge>
          ) : (
            <Badge variant={product.stock <= 5 ? "destructive" : "default"}>
              {product.stock} {product.stock <= 5 && "⚠️ ¡Últimas unidades!"}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          disabled={product.stock === 0}
          className="bg-[#A0714C] hover:bg-[#B17953] text-white px-8 py-6 text-lg gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          {product.stock === 0 ? "Agotado" : "Agregar al carrito"}
        </Button>

        <Button variant="outline" size="lg" className="gap-2">
          <Share2 className="h-5 w-5" />
          Compartir
        </Button>
      </div>

      {tieneOferta && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-red-600 dark:text-red-400" />
            <p className="text-sm font-semibold text-red-600 dark:text-red-400">
              ⏳ Oferta por tiempo limitado
            </p>
          </div>
          <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-1">
            Aprovecha este precio especial antes de que termine la promoción
          </p>
        </div>
      )}

      <Separator />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4">
        {beneficios.map((beneficio, index) => {
          const Icon = beneficio.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-[#A0714C]/10 p-2 rounded-lg">
                <Icon className="h-5 w-5 text-[#A0714C]" />
              </div>
              <div>
                <p className="text-sm font-medium">{beneficio.title}</p>
                <p className="text-xs text-muted-foreground">
                  {beneficio.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsProduct;
