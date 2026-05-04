import { obtenerProductosFeatured } from "@/app/api/productos/accions/obtener-productos-featured";
import { useQuery } from "@tanstack/react-query";

const useGetProductosFeatured = () => {
  return useQuery({
    queryKey: ["productos-featured"],
    queryFn: () => obtenerProductosFeatured(),
    staleTime: 60 * 5 * 1000,
    retry: 0,
  });
};

export default useGetProductosFeatured;
