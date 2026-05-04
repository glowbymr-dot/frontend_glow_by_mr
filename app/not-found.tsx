"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ShoppingBag, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-linear-to-br from-[#A0714C] to-[#B17953] rounded-full flex items-center justify-center mx-auto shadow-lg">
            <Gem className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-8xl font-bold bg-linear-to-r from-[#A0714C] to-[#B17953] bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "#664C3A" }}
        >
          Página no encontrada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button className="bg-[#A0714C] hover:bg-[#B17953] text-white gap-2 w-full sm:w-auto cursor-pointer">
              <Home className="h-4 w-4" />
              Inicio
            </Button>
          </Link>
          <Link href="/productos">
            <Button
              variant="outline"
              className="gap-2 w-full sm:w-auto cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4" />
              Productos
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
