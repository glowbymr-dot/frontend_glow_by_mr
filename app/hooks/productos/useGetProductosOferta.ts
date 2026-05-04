import { obtenerProductosOferta } from "@/app/api/productos/accions/obtener-productos-oferta";
import { useQuery } from "@tanstack/react-query";

const useGetProductosOferta = () => {
  return useQuery({
    queryKey: ["productos-oferta"],
    queryFn: () => obtenerProductosOferta(),
    staleTime: 60 * 5 * 1000,
    retry: 0,
  });
};

export default useGetProductosOferta;
