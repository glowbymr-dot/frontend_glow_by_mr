import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { ResponseProductosInterface } from "../interfaces/response-productos.interface";

export const obtenerProductoBySlug = async (slug: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/productos?filters[slug][$eq]=${slug}&populate[0]=category&populate[1]=images`;
  const response = await joyeriaAPI.get<ResponseProductosInterface>(url);
  return response.data;
};
