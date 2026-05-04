import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  sortBy: "default" | "price-asc" | "price-desc" | "name-asc";
  setSortBy: Dispatch<
    SetStateAction<"default" | "price-asc" | "price-desc" | "name-asc">
  >;
  uniqueOrigins: string[];
  selectedOrigins: string[];
  handleOriginToggle: (origin: string) => void;
  priceRange: [number, number];
  setPriceRange: Dispatch<SetStateAction<[number, number]>>;
  clearFilters: () => void;
}

const MenuMovil = ({
  selectedOrigins,
  setSortBy,
  sortBy,
  uniqueOrigins,
  handleOriginToggle,
  priceRange,
  setPriceRange,
  clearFilters,
}: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center w-full p-4 rounded-2xl shadow bg-gray-100">
          <Filter className="w-4 h-4 mr-2 lg:hidden" />
          Filtros
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-full px-6">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-medium mb-3">Ordenar por</h4>

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

          <div>
            <h4 className="font-medium mb-3">Material</h4>
            <div className="space-y-2">
              {uniqueOrigins.map((origin) => (
                <div key={origin} className="flex items-center space-x-2">
                  <Checkbox
                    id={`origin-mobile-${origin}`}
                    checked={selectedOrigins.includes(origin)}
                    onCheckedChange={() => handleOriginToggle(origin)}
                  />
                  <Label htmlFor={`origin-mobile-${origin}`}>{origin}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Rango de Precios</h4>
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
              <div className="flex justify-between text-sm text-gray-600">
                <span>L{priceRange[0].toLocaleString()}</span>
                <span>L{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={clearFilters}
            className="w-full bg-[#A0714C] hover:bg-[#8B5E3C] text-white"
          >
            Limpiar todos los filtros
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMovil;
