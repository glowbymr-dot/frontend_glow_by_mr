import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { ResponseCategoriasInterface } from "../interfaces/response-categorias.interface";

export const obtenerCategorias = async (page: number, pagination: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories?populate[0]=mainImage&pagination[page]=${page}&pagination[pageSize]=${pagination}`;
  const response = await joyeriaAPI.get<ResponseCategoriasInterface>(url);
  return response.data;
};
