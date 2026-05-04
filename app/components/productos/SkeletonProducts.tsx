import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProducts = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Skeleton className="h-8 w-32 rounded-full" />
          </div>
          <div className="flex justify-center mb-4">
            <Skeleton className="h-12 w-80 rounded-lg" />
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-6 w-96 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-64 w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkeletonProducts;
