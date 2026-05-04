export interface FiltersProductos {
  slug?: string;
  page?: number;
  pageSize?: number;
  isFeatured?: boolean;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
}
