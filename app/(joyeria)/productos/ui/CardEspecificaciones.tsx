import {
  Category,
  Producto,
} from "@/app/api/productos/interfaces/response-productos.interface";
import { Card } from "@/components/ui/card";

interface Props {
  product: Producto;
  category: Category;
}

const CardEspecificaciones = ({ product, category }: Props) => {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Especificaciones técnicas</h3>
      <div className="space-y-3">
        <div className="flex justify-between py-2 border-b">
          <span className="font-medium">Material</span>
          <span className="text-muted-foreground">
            {product.origin || "Oro"}
          </span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="font-medium">Origen</span>
          <span className="text-muted-foreground">
            {product.origin || "Importado"}
          </span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="font-medium">Categoría</span>
          <span className="text-muted-foreground">
            {category?.categoryName}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CardEspecificaciones;
