import {
  Category,
  Producto,
} from "@/app/api/productos/interfaces/response-productos.interface";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  category: Category;
  product: Producto;
}

const LinksDetailsProduct = ({ category, product }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="hover:text-[#A0714C] transition shrink-0">
            Inicio
          </Link>

          <ChevronLeft className="h-3 w-3 rotate-180 shrink-0" />

          <Link
            href={`/categorias/${category?.slug}`}
            className="hover:text-[#A0714C] transition shrink-0"
          >
            {category?.categoryName}
          </Link>

          <ChevronLeft className="h-3 w-3 rotate-180 shrink-0" />

          <span className="text-foreground font-medium truncate max-w-36 sm:max-w-none">
            {product.productName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LinksDetailsProduct;
