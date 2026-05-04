import { Categorias } from "@/app/api/categorias/interfaces/response-categorias.interface";
import { getStrapiImage } from "@/app/helpers/funciones/getStrapiImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  categoria: Categorias;
  index: number;
}

const CardCategorias = ({ categoria, index }: Props) => {
  const router = useRouter();
  return (
    <Link href={`/categorias/${categoria.slug}`}>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-xl bg-white h-full flex flex-col">
        <div className="relative h-64 w-full overflow-hidden rounded-t-xl bg-gray-100">
          {categoria.mainImage ? (
            <>
              <Image
                src={getStrapiImage(categoria.mainImage.url)}
                alt={categoria.categoryName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
                unoptimized
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#A0714C]/20 to-[#B17953]/20">
              <Package className="w-16 h-16 text-[#A0714C]/40" />
            </div>
          )}
        </div>

        <CardContent className="p-6 text-center grow flex flex-col">
          <div className="flex justify-center">
            <span className="inline-flex items-center bg-[#A0714C]/10 border border-[#A0714C]/20 text-[#A0714C] text-xs font-medium px-2.5 py-1 rounded-md">
              <Sparkles className="w-3 h-3 me-1.5" />
              Colección
            </span>
          </div>

          <h3
            className="mt-4 mb-3 text-xl md:text-2xl font-semibold tracking-tight group-hover:text-[#A0714C] transition-colors duration-300"
            style={{ color: "#664C3A" }}
          >
            {categoria.categoryName}
          </h3>

          <p className="text-gray-500 text-sm mb-6 line-clamp-2 grow">
            Descubre nuestra exclusiva colección de{" "}
            {categoria.categoryName.toLowerCase()}
          </p>

          <Button
            onClick={() => router.push(`/categorias/${categoria.slug}`)}
            variant="outline"
            className="hover:cursor-pointer inline-flex items-center justify-center border-[#A0714C] text-[#A0714C] hover:bg-[#A0714C] hover:text-white transition-all duration-300 rounded-lg text-sm px-5 py-2.5 gap-2 w-full sm:w-auto"
          >
            Ver más
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardCategorias;
