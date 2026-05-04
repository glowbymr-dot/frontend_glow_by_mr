"use client";
import { Sparkles, Filter, Search, X } from "lucide-react";
import useGetProductos from "@/app/hooks/productos/useGetProductos";
import CardProductos from "@/app/components/productos/CardProductos";
import Paginacion from "@/app/components/Paginacion";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Testimonials from "@/app/components/Testimonials";
import MenuMovil from "./ui/MenuMovil";
import { Badge } from "@/components/ui/badge";

const ProductosPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "default" | "price-asc" | "price-desc" | "name-asc"
  >("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);

  const {
    data: productosData,
    isLoading,
    error,
  } = useGetProductos({
    page: page,
    pageSize: 9,
  });

  const productos = productosData?.data || [];
  const totalProductos = productosData?.meta?.pagination?.total || 0;
  const totalPages = productosData?.meta?.pagination?.pageCount || 0;

  const uniqueOrigins = useMemo(() => {
    const origins = new Set(productos.map((p) => p.origin).filter(Boolean));
    return Array.from(origins);
  }, [productos]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...productos];

    if (searchTerm) {
      filtered = filtered.filter((producto) =>
        producto.productName.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    filtered = filtered.filter(
      (producto) =>
        producto.price >= priceRange[0] && producto.price <= priceRange[1],
    );

    if (selectedOrigins.length > 0) {
      filtered = filtered.filter((producto) =>
        selectedOrigins.includes(producto.origin),
      );
    }

    switch (sortBy) {
      case "price-asc":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filtered.sort((a, b) => b.price - a.price);
      case "name-asc":
        return filtered.sort((a, b) =>
          a.productName.localeCompare(b.productName),
        );
      default:
        return filtered;
    }
  }, [productos, searchTerm, sortBy, priceRange, selectedOrigins]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOriginToggle = (origin: string) => {
    setSelectedOrigins((prev) =>
      prev.includes(origin)
        ? prev.filter((o) => o !== origin)
        : [...prev, origin],
    );
    setPage(1);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSortBy("default");
    setPriceRange([0, 10000]);
    setSelectedOrigins([]);
    setPage(1);
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

          <div className="flex gap-5">
            <div className="hidden lg:block w-64 space-y-6">
              <div className="animate-pulse">
                <div className="h-6 w-24 bg-gray-200 rounded mb-3"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gray-200 rounded"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-pulse">
                <div className="h-6 w-32 bg-gray-200 rounded mb-3"></div>
                <div className="h-8 w-full bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="flex-1">
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
      <section className="relative bg-linear-to-r from-[#664C3A] to-[#A0714C] text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Colección
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Todos los Productos
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Descubre nuestra colección completa de joyería exclusiva
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6 pb-4 border-b border-gray-200">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-[#A0714C] focus:ring-[#A0714C]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#A0714C]" />
                <span className="text-sm text-gray-600">Ordenar:</span>
              </div>
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

            <div className="hidden sm:flex items-center">
              {(searchTerm ||
                selectedOrigins.length > 0 ||
                priceRange[0] > 0 ||
                priceRange[1] < 10000) && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-sm text-[#A0714C] hover:text-[#8B5E3C]"
                >
                  Limpiar filtros
                </Button>
              )}
            </div>

            <div className="lg:hidden w-full flex justify-end">
              <MenuMovil
                sortBy={sortBy}
                setSortBy={setSortBy}
                uniqueOrigins={uniqueOrigins}
                selectedOrigins={selectedOrigins}
                handleOriginToggle={handleOriginToggle}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                clearFilters={clearFilters}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside className="hidden lg:block lg:w-72 xl:w-80 shrink-0">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#A0714C]" />
                    Material
                  </h3>
                  <div className="space-y-3">
                    {uniqueOrigins.map((origin) => (
                      <div key={origin} className="flex items-center space-x-2">
                        <Checkbox
                          id={`origin-${origin}`}
                          checked={selectedOrigins.includes(origin)}
                          onCheckedChange={() => handleOriginToggle(origin)}
                          className="border-gray-300 data-[state=checked]:bg-[#A0714C] data-[state=checked]:border-[#A0714C]"
                        />
                        <Label
                          htmlFor={`origin-${origin}`}
                          className="text-sm text-gray-600 cursor-pointer hover:text-[#A0714C] transition-colors"
                        >
                          {origin}
                        </Label>
                      </div>
                    ))}
                    {uniqueOrigins.length === 0 && (
                      <p className="text-sm text-gray-400">No hay materiales</p>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    💰 Rango de Precios
                  </h3>
                  <div className="space-y-4">
                    <Slider
                      min={0}
                      max={10000}
                      step={100}
                      value={priceRange}
                      onValueChange={(value) =>
                        setPriceRange(value as [number, number])
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        L {priceRange[0].toLocaleString()}
                      </span>
                      <span className="text-gray-600">
                        L {priceRange[1].toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {(searchTerm ||
                  selectedOrigins.length > 0 ||
                  priceRange[0] > 0 ||
                  priceRange[1] < 10000 ||
                  sortBy !== "default") && (
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Filtros activos
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          Buscar: {searchTerm}
                          <X
                            className="w-3 h-3 ml-1 cursor-pointer"
                            onClick={() => setSearchTerm("")}
                          />
                        </Badge>
                      )}
                      {selectedOrigins.map((origin) => (
                        <Badge
                          key={origin}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {origin}
                          <X
                            className="w-3 h-3 ml-1 cursor-pointer"
                            onClick={() => handleOriginToggle(origin)}
                          />
                        </Badge>
                      ))}
                      {(priceRange[0] > 0 || priceRange[1] < 10000) && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          L {priceRange[0]} - L {priceRange[1]}
                          <X
                            className="w-3 h-3 ml-1 cursor-pointer"
                            onClick={() => setPriceRange([0, 10000])}
                          />
                        </Badge>
                      )}
                      {sortBy !== "default" && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {sortBy === "price-asc" && "Precio: Menor a Mayor"}
                          {sortBy === "price-desc" && "Precio: Mayor a Menor"}
                          {sortBy === "name-asc" && "Nombre: A-Z"}
                          <X
                            className="w-3 h-3 ml-1 cursor-pointer"
                            onClick={() => setSortBy("default")}
                          />
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-xs text-[#A0714C] hover:text-[#8B5E3C]"
                      >
                        Limpiar todos
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </aside>

            <main className="flex-1">
              {isLoading && page > 1 && (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A0714C]"></div>
                </div>
              )}

              {!isLoading && (
                <>
                  <div className="text-sm text-gray-500 mb-4">
                    Mostrando {filteredAndSortedProducts.length} de{" "}
                    {totalProductos} productos
                  </div>

                  {filteredAndSortedProducts.length === 0 ? (
                    <div className="text-center py-20">
                      <div className="text-gray-400 mb-4">
                        <Sparkles className="w-16 h-16 mx-auto" />
                      </div>
                      <p className="text-gray-500 text-lg">
                        No se encontraron productos
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Intenta con otros filtros o términos de búsqueda
                      </p>
                      <Button
                        onClick={clearFilters}
                        className="mt-6 bg-[#A0714C] hover:bg-[#8B5E3C] text-white"
                      >
                        Limpiar filtros
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredAndSortedProducts.map((producto) => (
                        <CardProductos key={producto.id} producto={producto} />
                      ))}
                    </div>
                  )}
                </>
              )}

              {!isLoading &&
                totalPages > 1 &&
                filteredAndSortedProducts.length > 0 && (
                  <div className="mt-12">
                    <Paginacion
                      currentPage={page}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                      className="justify-center"
                    />
                  </div>
                )}
            </main>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default ProductosPage;
