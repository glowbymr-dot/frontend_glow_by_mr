"use client";

import useGetProductosBySlug from "@/app/hooks/productos/useGetProductosBySlug";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkeletonDetailsProducts from "../ui/SkeletonDetailsProducts";
import LinksDetailsProduct from "../ui/LinksDetailsProduct";
import DetailsProduct from "../ui/DetailsProduct";
import CardDescriptionProductDetails from "../ui/CardDescriptionProductDetails";
import CardEspecificaciones from "../ui/CardEspecificaciones";
import Ventajas from "@/app/components/Ventajas";
import useGetProductosByCategory from "@/app/hooks/productos/useGetProductosByCategory";
import ProductosRelacionados from "@/app/components/productos/ProductosRelacionados";

const DetailsProductBySlug = () => {
  const params = useParams<{ slug: string }>();
  const { slug } = params;
  const { data: producto, isLoading } = useGetProductosBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = producto?.data?.[0];

  const categoria = product?.category.slug;

  const { data: prod_categoria } = useGetProductosByCategory({
    slug: categoria,
  });

  const productosRelacionados = prod_categoria?.data.filter(
    (prod) => prod.id !== product?.id,
  );

  if (isLoading) {
    return <SkeletonDetailsProducts />;
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  const images = product.images || [];
  const mainImage = images[selectedImage] || images[0];
  const category = product.category;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <LinksDetailsProduct category={category} product={product} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square relative">
                {mainImage && (
                  <Image
                    src={mainImage.url}
                    alt={product.productName}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                )}
                {product.isFeatured && (
                  <Badge className="absolute top-4 left-4 bg-[#A0714C] hover:bg-[#B17953]">
                    Destacado
                  </Badge>
                )}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-[#A0714C] shadow-md"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`${product.productName} - imagen ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <DetailsProduct category={category} product={product} />
        </div>

        <div className="mt-12 md:mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <CardDescriptionProductDetails product={product} />
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <CardEspecificaciones product={product} category={category} />
            </TabsContent>
          </Tabs>
        </div>

        <ProductosRelacionados
          productosRelacionados={productosRelacionados ?? []}
          categoria={categoria ?? ""}
        />
      </div>
      <Ventajas />
    </div>
  );
};

export default DetailsProductBySlug;
