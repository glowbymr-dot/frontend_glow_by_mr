import { Producto } from "@/app/api/productos/interfaces/response-productos.interface";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Props {
  product: Producto;
}

const CardDescriptionProductDetails = ({ product }: Props) => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Descripción del producto</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Material de alta calidad</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Diseño elegante y moderno</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Garantía de satisfacción</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Envío seguro</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDescriptionProductDetails;
