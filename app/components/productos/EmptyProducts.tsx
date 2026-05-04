import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  message: string;
  categoryName: string;
}

const EmptyProducts = ({ message, categoryName }: Props) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
        <svg
          className="w-12 h-12 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {message || "No hay productos disponibles"}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        {categoryName
          ? `No encontramos productos en la categoría "${categoryName}"`
          : "No hay productos relacionados para mostrar"}
      </p>
      <Link href="/productos">
        <Button
          variant="outline"
          className="border-[#A0714C] text-[#A0714C] hover:bg-[#A0714C] hover:text-white"
        >
          Ver todos los productos
        </Button>
      </Link>
    </div>
  );
};

export default EmptyProducts;
