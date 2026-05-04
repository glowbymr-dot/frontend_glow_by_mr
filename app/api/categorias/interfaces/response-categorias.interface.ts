export interface ResponseCategoriasInterface {
  data: Categorias[];
  meta: Meta;
}

export interface Categorias {
  id: number;
  documentId: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  categoryName: string;
  mainImage: MainImage;
}

export interface MainImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  focalPoint: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  small: Large;
  medium: Large;
  thumbnail: Large;
  large?: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
