import { getStrapiImage } from "@/app/helpers/funciones/getStrapiImage";
import { CartItem } from "@/app/store/cart-store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Minus, Plus, ShoppingCart, Trash2, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  totalItems: number;
  cartItems: CartItem[];
  handleUpdateCartQuantity: (productId: number, newQuantity: number) => void;
  removeItem: (productId: number) => void;
  totalPrice: number;
}

const DrawerCart = ({
  isDrawerOpen,
  setIsDrawerOpen,
  totalItems,
  cartItems,
  handleUpdateCartQuantity,
  removeItem,
  totalPrice,
}: Props) => {
  const WHATSAPP_NUMBER = `${process.env.NEXT_PUBLIC_CALL_CONTACT}`;

  const generateWhatsAppMessage = () => {
    let message = "🛍️ *NUEVO PEDIDO* 🛍️%0A%0A";
    message += "*DETALLES DEL PEDIDO:*%0A";
    message += "────────────────%0A%0A";

    cartItems.forEach((item, index) => {
      const tieneOfertaItem =
        item.oferta && item.offer_price && item.offer_price > 0;
      const price = tieneOfertaItem ? item.offer_price! : item.price;
      const subtotal = price * item.quantity;

      message += `*${index + 1}.* ${item.productName}%0A`;
      message += `   📦 Cantidad: ${item.quantity}%0A`;
      message += `   💰 Precio: L. ${price.toFixed(2)}%0A`;
      message += `   💵 Subtotal: L. ${subtotal.toFixed(2)}%0A`;
      message += `   🔗 Link: ${window.location.origin}/productos/${item.slug}%0A`;
      message += `%0A`;
    });

    message += "────────────────%0A";
    message += `*📊 TOTAL DEL PEDIDO:* L. ${totalPrice.toFixed(2)}%0A`;
    message += `*📦 CANTIDAD DE PRODUCTOS:* ${totalItems}%0A%0A`;
    message += "✨ *Gracias por tu compra!* ✨";

    return message;
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Carrito vacío", {
        description: "Agrega productos antes de realizar un pedido",
      });
      return;
    }

    const message = generateWhatsAppMessage();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");

    setIsDrawerOpen(false);

    toast.success("Redirigiendo a WhatsApp", {
      description: "Serás redirigido para completar tu pedido",
    });
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="lg" className="gap-2 relative">
          <ShoppingCart className="h-5 w-5" />
          Ver carrito
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Mi Carrito ({totalItems} productos)</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => {
                const tieneOfertaItem =
                  item.oferta && item.offer_price && item.offer_price > 0;
                const price = tieneOfertaItem ? item.offer_price! : item.price;
                return (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={
                          getStrapiImage(item.images?.[0]?.url) ||
                          "/images/product_not_found.png"
                        }
                        alt={item.productName}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">
                        {item.productName}
                      </h4>
                      <p className="text-[#A0714C] font-bold text-sm">
                        L. {price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            handleUpdateCartQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            handleUpdateCartQuantity(item.id, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-red-500 ml-auto"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-[#A0714C] text-xl">
                    L. {totalPrice.toFixed(2)}
                  </span>
                </div>

                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pedir por WhatsApp
                </Button>

                <p className="text-xs text-center text-gray-500 mt-3">
                  Al hacer clic, serás redirigido a WhatsApp para confirmar tu
                  pedido
                </p>
              </div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCart;
