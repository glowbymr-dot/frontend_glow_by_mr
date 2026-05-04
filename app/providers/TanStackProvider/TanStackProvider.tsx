"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TanStackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      {children}
      <Footer />
    </QueryClientProvider>
  );
}
