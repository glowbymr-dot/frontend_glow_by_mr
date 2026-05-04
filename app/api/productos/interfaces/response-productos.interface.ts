export interface ResponseProductosInterface {
  data: Producto[];
  meta: Meta;
}

export interface Producto {
  id: number;
  documentId: string;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  stock: number;
  origin: string;
  isFeatured: boolean;
  oferta: boolean;
  offer_price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: Category;
  images: Image[];
}

export interface Category {
  id: number;
  documentId: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  categoryName: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  focalPoint: null;
  width: number | null;
  height: number | null;
  formats: Formats | null;
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
  small?: Medium;
  medium?: Medium;
  thumbnail: Medium;
}

export interface Medium {
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
