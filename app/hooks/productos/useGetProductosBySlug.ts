import { obtenerProductoBySlug } from "@/app/api/productos/accions/obtener-producto-slug";
import { useQuery } from "@tanstack/react-query";

const useGetProductosBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["producto-slug", slug],
    queryFn: () => obtenerProductoBySlug(slug),
    retry: 0,
  });
};

export default useGetProductosBySlug;
