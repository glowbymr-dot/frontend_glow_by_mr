import { obtenerCategorias } from "@/app/api/categorias/accions/obtener-categorias";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetObtenerCategorias = (page: number = 1, pagination: number = 10) => {
  return useQuery({
    queryKey: ["categorias", page, pagination],
    queryFn: () => obtenerCategorias(page, pagination),
    staleTime: 60 * 5 * 1000,
    retry: 0,
  });
};

export default useGetObtenerCategorias;
