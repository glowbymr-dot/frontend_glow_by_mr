import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { ResponseProductosInterface } from "../interfaces/response-productos.interface";

export const obtenerProductosOferta = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/productos?filters[oferta][$eq]=true&populate[0]=category&populate[1]=images&pagination[page]=1&pagination[pageSize]=10`;
  const response = await joyeriaAPI.get<ResponseProductosInterface>(url);
  return response.data;
};
