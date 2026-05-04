import EmptyProducts from "./EmptyProducts";
import CardProductos from "./CardProductos";
import { Producto } from "@/app/api/productos/interfaces/response-productos.interface";

interface Props {
  productosRelacionados: Producto[];
  categoria: string;
}

const ProductosRelacionados = ({ productosRelacionados, categoria }: Props) => {
  return (
    <div className="mt-16">
      <div className="flex justify-center mb-5">
        <h1 className="text-xl font-bold text-[#A0714C]">
          Productos Relacionados
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productosRelacionados && productosRelacionados.length > 0 ? (
          productosRelacionados.map((producto) => (
            <CardProductos key={producto.id} producto={producto} />
          ))
        ) : (
          <EmptyProducts
            message="No hay productos relacionados disponibles"
            categoryName={categoria ?? ""}
          />
        )}
      </div>
    </div>
  );
};

export default ProductosRelacionados;
