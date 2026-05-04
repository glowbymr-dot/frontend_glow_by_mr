"use client";

import { motion } from "framer-motion";
import Inicio from "./components/home/Inicio";
import useGetObtenerCategorias from "./hooks/categorias/useGetObtenerCategorias";
import useGetProductosFeatured from "./hooks/productos/useGetProductosFeatured";
import Testimonials from "./components/Testimonials";
import Ventajas from "./components/Ventajas";
import ProductosDestacados from "./components/productos/ProductosDestacados";
import CategoriasDestacadas from "./components/categorias/CategoriasDestacadas";
import { fadeUp, staggerContainer } from "./helpers/data/animaciones";
import useGetProductosOferta from "./hooks/productos/useGetProductosOferta";
import ProductosOferta from "./components/productos/ProductosOferta";

export default function Home() {
  const { data: productos, isLoading: cargando_productos } =
    useGetProductosFeatured();
  const { data: categorias, isLoading: cargando_categorias } =
    useGetObtenerCategorias(1, 6);

  const { data: productos_oferta, isLoading } = useGetProductosOferta();

  return (
    <div className="overflow-hidden">
      <Inicio />

      {productos_oferta && productos_oferta.data.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <ProductosOferta
              productos={productos_oferta}
              isLoading={isLoading}
            />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp}>
          <CategoriasDestacadas
            categorias={categorias}
            isLoading={cargando_categorias}
          />
        </motion.div>
      </motion.div>

      {productos && productos.data.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <ProductosDestacados
              productos={productos}
              isLoading={cargando_productos}
            />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <Ventajas />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.div>
    </div>
  );
}
