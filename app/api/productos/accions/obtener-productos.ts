import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { ResponseProductosInterface } from "../interfaces/response-productos.interface";

interface PaginationParams {
  page?: number;
  pageSize?: number;
}

export const obtenerProductos = async ({
  page = 1,
  pageSize = 10,
}: PaginationParams) => {
  const response = await joyeriaAPI.get<ResponseProductosInterface>(
    `/productos`,
    {
      params: {
        populate: ["category", "images"],
        pagination: {
          page,
          pageSize,
        },
      },
    },
  );

  return response.data;
};
