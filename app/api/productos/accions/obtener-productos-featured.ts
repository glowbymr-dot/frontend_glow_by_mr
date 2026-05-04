import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { ResponseProductosInterface } from "../interfaces/response-productos.interface";

export const obtenerProductosFeatured = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/productos?populate[0]=category&populate[1]=images&pagination[page]=1&pagination[pageSize]=6`;
  const response = await joyeriaAPI.get<ResponseProductosInterface>(url);
  return response.data;
};
