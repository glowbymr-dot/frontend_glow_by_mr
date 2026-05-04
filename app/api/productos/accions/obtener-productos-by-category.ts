import { joyeriaAPI } from "@/app/helpers/api/joyeriaApi";
import { ResponseProductosInterface } from "../interfaces/response-productos.interface";

export interface FiltersProductos {
  slug?: string;
}

export const obtenerProductosByCategory = async (
  filters: FiltersProductos,
  page: number = 1,
  pageSize: number = 10,
) => {
  const response = await joyeriaAPI.get<ResponseProductosInterface>(
    `/productos`,
    {
      params: {
        filters: {
          category: {
            slug: {
              $eq: filters.slug,
            },
          },
        },
        populate: {
          category: true,
          images: true,
        },
        pagination: {
          page,
          pageSize,
        },
      },
    },
  );

  return response.data;
};
