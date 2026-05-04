"use client";
import { Sparkles, Filter } from "lucide-react";
import { useParams } from "next/navigation";
import useGetProductosByCategory from "@/app/hooks/productos/useGetProductosByCategory";
import CardProductos from "@/app/components/productos/CardProductos";
import { useState } from "react";
import Link from "next/link";
import Paginacion from "@/app/components/Paginacion";
import useGetProductosOferta from "@/app/hooks/productos/useGetProductosOferta";
import ProductosOferta from "@/app/components/productos/ProductosOferta";
import Ventajas from "@/app/components/Ventajas";

const CategoriasIdPage = () => {
  const params = useParams<{ id: string }>();
  const slug = params.id;
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<
    "default" | "price-asc" | "price-desc" | "name-asc"
  >("default");

  const {
    data: productosData,
    isLoading,
    error,
  } = useGetProductosByCategory({
    slug: slug,
    page: page,
    pageSize: 12,
  });

  const { data: productos_oferta, isLoading: cargando } =
    useGetProductosOferta();

  const productos = productosData?.data || [];
  const totalProductos = productosData?.meta?.pagination?.total || 0;
  const totalPages = productosData?.meta?.pagination?.pageCount || 0;
  const categoriaNombre = productos[0]?.category?.categoryName || "Categoría";

  const getSortedProducts = () => {
    if (!productos.length) return [];

    const sorted = [...productos];
    switch (sortBy) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a, b) =>
          a.productName.localeCompare(b.productName),
        );
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading && page === 1) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-12 w-64 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="h-6 w-48 bg-gray-200 rounded-lg mx-auto"></div>
            </div>
          </div>

          <div className="animate-pulse flex justify-end items-center mb-8">
            <div className="h-10 w-40 bg-gray-200 rounded-lg"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg"></div>
                <div className="h-4 bg-gray-200 mt-4 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 mt-2 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 mt-3 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-4">
            Error al cargar los productos
          </div>
          <p className="text-gray-600 mb-6">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#A0714C] text-white px-6 py-2 rounded-full hover:bg-[#8B5E3C] transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-linear-to-r from-[#664C3A] to-[#A0714C] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              {categoriaNombre}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {categoriaNombre}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Explora nuestra colección exclusiva de{" "}
              {categoriaNombre.toLowerCase()}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#A0714C]" />
              <span className="text-sm text-gray-600">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#A0714C] focus:ring-1 focus:ring-[#A0714C]"
              >
                <option value="default">Destacados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name-asc">Nombre: A-Z</option>
              </select>
            </div>
          </div>

          {isLoading && page > 1 && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A0714C]"></div>
            </div>
          )}

          {!isLoading && (
            <>
              {sortedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-gray-400 mb-4">
                    <Sparkles className="w-16 h-16 mx-auto" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    No hay productos disponibles en esta categoría
                  </p>
                  <Link
                    href="/"
                    className="inline-block mt-4 text-[#A0714C] hover:underline"
                  >
                    Volver al inicio
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((producto) => (
                    <CardProductos key={producto.id} producto={producto} />
                  ))}
                </div>
              )}
            </>
          )}

          {!isLoading && totalPages > 1 && (
            <div className="mt-12">
              <Paginacion
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                className="justify-center"
              />
            </div>
          )}

          {!isLoading && sortedProducts.length > 0 && (
            <div className="text-center text-sm text-gray-500 mt-8">
              Mostrando {sortedProducts.length} de {totalProductos} productos
              {page > 1 && ` - Página ${page} de ${totalPages}`}
            </div>
          )}
        </div>
      </section>

      <ProductosOferta productos={productos_oferta} isLoading={cargando} />
      <Ventajas />
    </div>
  );
};

export default CategoriasIdPage;
