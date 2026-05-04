import { obtenerProductos } from "@/app/api/productos/accions/obtener-productos";
import { useQuery } from "@tanstack/react-query";

interface Props {
  page?: number;
  pageSize?: number;
}

const useGetProductos = ({ page = 1, pageSize = 10 }: Props) => {
  return useQuery({
    queryKey: ["productos", page, pageSize],
    queryFn: () => obtenerProductos({ page, pageSize }),
    staleTime: 60 * 5 * 1000,
    retry: 0,
  });
};

export default useGetProductos;
