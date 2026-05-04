"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import useGetObtenerCategorias from "@/app/hooks/categorias/useGetObtenerCategorias";
import CardCategorias from "@/app/components/categorias/CardCategorias";
import CategoriesSkeleton from "@/app/components/categorias/CategoriesSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Paginacion from "@/app/components/Paginacion";

const CategoriasPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 9;

  const { data: categoriasResponse, isLoading } = useGetObtenerCategorias(
    currentPage,
    itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categoriasFiltradas = categoriasResponse?.data?.filter((categoria) =>
    categoria.categoryName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = categoriasResponse?.meta?.pagination?.pageCount || 1;
  const totalCategorias = categoriasResponse?.meta?.pagination?.total || 0;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <section className="relative bg-linear-to-r from-[#664C3A] to-[#8B6749] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="diamonds"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <polygon points="10,0 20,10 10,20 0,10" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#diamonds)" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Nuestras Colecciones</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explora nuestras{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FFA500]">
              categorías
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
            Descubre nuestra selección de joyas únicas, diseñadas para cada
            momento especial
          </p>
        </div>
      </section>

      <section className="py-8 px-4 md:px-8 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Input
                type="text"
                placeholder="Buscar categorías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-2 border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="text-sm text-gray-500">
              {totalCategorias}{" "}
              {totalCategorias === 1 ? "categoría" : "categorías"} encontradas
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          {isLoading ? (
            <CategoriesSkeleton />
          ) : categoriasFiltradas && categoriasFiltradas.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoriasFiltradas.map((categoria, index) => (
                  <CardCategorias
                    key={categoria.id}
                    categoria={categoria}
                    index={index}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <Paginacion
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: "#664C3A" }}
              >
                No se encontraron categorías
              </h3>
              <p className="text-gray-600 mb-6">
                No hay categorías que coincidan con "{searchTerm}"
              </p>
              <Button
                onClick={() => setSearchTerm("")}
                className="bg-[#A0714C] hover:bg-[#8B613B] text-white"
              >
                Limpiar búsqueda
              </Button>
            </div>
          )}
        </div>
      </section>

      {!isLoading && categoriasFiltradas && categoriasFiltradas.length > 0 && (
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-[#A0714C]/10 to-[#B17953]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#A0714C]" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#664C3A" }}
                >
                  Calidad Garantizada
                </h3>
                <p className="text-gray-600 text-sm">
                  Materiales premium y acabados perfectos
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-[#A0714C]/10 to-[#B17953]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#A0714C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#664C3A" }}
                >
                  Envío Seguro
                </h3>
                <p className="text-gray-600 text-sm">
                  Entregas aseguradas en todo el país
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-[#A0714C]/10 to-[#B17953]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#A0714C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#664C3A" }}
                >
                  Garantía de Satisfacción
                </h3>
                <p className="text-gray-600 text-sm">
                  30 días de garantía en todas tus compras
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CategoriasPage;
