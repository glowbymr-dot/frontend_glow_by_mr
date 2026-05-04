import { obtenerProductosByCategory } from "@/app/api/productos/accions/obtener-productos-by-category";
import { useQuery } from "@tanstack/react-query";

interface Props {
  slug?: string;
  page?: number;
  pageSize?: number;
}

const useGetProductosByCategory = ({
  slug,
  page = 1,
  pageSize = 10,
}: Props) => {
  return useQuery({
    queryKey: ["productos-category", slug, page, pageSize],
    queryFn: () => obtenerProductosByCategory({ slug }, page, pageSize),
    enabled: !!slug,
    staleTime: 60 * 5 * 1000,
    retry: 0,
  });
};

export default useGetProductosByCategory;
