import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const CategoriesSkeleton = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-gray-200 rounded-lg"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Skeleton className="h-full w-full rounded-none" />
              </div>

              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <Skeleton className="h-6 w-24 rounded-md" />
                </div>

                <Skeleton className="h-7 w-40 rounded-lg mx-auto" />

                <Skeleton className="h-10 w-32 rounded-lg mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSkeleton;
