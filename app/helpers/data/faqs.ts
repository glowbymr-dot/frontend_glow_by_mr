interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    category: "Productos",
    question: "¿Los productos son de materiales originales?",
    answer:
      "Sí, todos nuestros productos están fabricados con materiales de alta calidad. Utilizamos plata esterlina 925, oro de 14k y 18k, y piedras preciosas y semipreciosas auténticas certificadas.",
  },
  {
    category: "Productos",
    question: "¿Puedo personalizar una joya?",
    answer:
      "¡Por supuesto! Ofrecemos servicios de personalización como grabados, ajustes de medidas y diseños a medida. Contáctanos directamente para discutir tu idea y te daremos un presupuesto personalizado.",
  },
  {
    category: "Productos",
    question: "¿Cómo cuido mis joyas?",
    answer:
      "Recomendamos guardar las joyas en su estuche original, evitar el contacto con productos químicos (perfumes, cloro, etc.), y limpiarlas suavemente con un paño de microfibra. Proporcionamos instrucciones detalladas con cada compra.",
  },
  {
    category: "Compras",
    question: "¿Cómo sé mi talla de anillo?",
    answer:
      "Tenemos una guía de tallas disponible en nuestra web. También puedes solicitar nuestro medidor de anillos gratuito por correo. Si no estás segura, podemos enviarte un anillo muestra para confirmar la talla antes de fabricar el definitivo.",
  },
  {
    category: "Compras",
    question: "¿Puedo cancelar mi pedido?",
    answer:
      "Sí, puedes cancelar tu pedido dentro de las 24 horas posteriores a la compra sin ningún costo. Después de ese periodo, si el producto ya está en proceso de fabricación, se aplicará una tarifa del 20%.",
  },
  {
    category: "Pagos",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal, transferencia bancaria, y pagos a través de Mercado Pago. Todos nuestros métodos de pago son seguros y encriptados.",
  },
  {
    category: "Pagos",
    question: "¿Ofrecen pagos a plazos?",
    answer:
      "Sí, trabajamos con servicios como Klarna y Mercado Crédito que te permiten dividir tu pago en cómodas cuotas. También ofrecemos nuestra propia opción de pago en 3 cuotas sin interés con tarjeta de crédito nacional.",
  },
  {
    category: "Garantía",
    question: "¿Tienen garantía los productos?",
    answer:
      "Todos nuestros productos tienen garantía de 12 meses contra defectos de fabricación. La garantía no cubre daños por uso inadecuado, golpes, pérdida de piedras por mal uso, o desgaste natural.",
  },
  {
    category: "Garantía",
    question: "¿Ofrecen servicio de reparación?",
    answer:
      "Sí, ofrecemos reparaciones sin costo dentro del periodo de garantía. Para reparaciones fuera de garantía, evaluamos cada caso y te ofrecemos un presupuesto antes de realizar cualquier trabajo.",
  },
];
