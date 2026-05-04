import {
  ShoppingBag,
  Scale,
  Lock,
  Users,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";

export interface Section {
  icon: LucideIcon;
  title: string;
  content: string;
}

export const sections: Section[] = [
  {
    icon: ShoppingBag,
    title: "1. Aceptación de Términos",
    content:
      "Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestros servicios.",
  },
  {
    icon: Scale,
    title: "2. Propiedad Intelectual",
    content:
      "Todo el contenido de este sitio web, incluyendo diseños de joyas, imágenes, logotipos, textos y gráficos, está protegido por derechos de autor y leyes de propiedad intelectual. Está prohibida la reproducción, distribución o modificación sin nuestro consentimiento expreso por escrito.",
  },
  {
    icon: ShoppingBag,
    title: "3. Productos y Precios",
    content:
      "Nos reservamos el derecho de modificar los precios y especificaciones de los productos en cualquier momento sin previo aviso. Las imágenes de los productos son meramente ilustrativas y pueden diferir ligeramente del producto real debido a la naturaleza artesanal de nuestras joyas.",
  },
  {
    icon: Lock,
    title: "4. Privacidad y Seguridad",
    content:
      "Tus datos personales serán tratados de acuerdo con nuestra Política de Privacidad. Implementamos medidas de seguridad técnica y organizativa para proteger tu información, incluyendo encriptación SSL y sistemas de prevención de fraudes.",
  },
  {
    icon: AlertTriangle,
    title: "5. Limitación de Responsabilidad",
    content:
      "No seremos responsables por daños indirectos, incidentales o consecuentes que puedan surgir del uso o la imposibilidad de usar nuestros productos o servicios. Nuestra responsabilidad máxima se limita al monto pagado por el producto en cuestión.",
  },
];

export const additionalTerms: string[] = [
  "Las promociones y descuentos no son acumulables a menos que se indique explícitamente",
  "Los precios están sujetos a cambios sin previo aviso debido a fluctuaciones en el costo de los materiales",
  "Los productos personalizados no pueden ser devueltos a menos que presenten defectos de fabricación",
  "Nos reservamos el derecho de rechazar cualquier pedido por sospecha de fraude o violación de estos términos",
  "Las ofertas y promociones tienen vigencia limitada mientras dure el stock disponible",
];
