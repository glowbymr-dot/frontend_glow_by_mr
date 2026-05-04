import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Producto } from "@/app/api/productos/interfaces/response-productos.interface";

export interface CartItem extends Producto {
  quantity: number;
  selectedPrice: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Producto, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItemQuantity: (productId: number) => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Producto, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === product.id,
        );

        const tieneOferta =
          product.oferta && product.offer_price && product.offer_price > 0;
        const currentPrice = tieneOferta ? product.offer_price! : product.price;

        if (existingItem) {
          const newQuantity = existingItem.quantity + quantity;
          const maxStock = Math.min(newQuantity, product.stock);

          set({
            items: currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: maxStock } : item,
            ),
          });
        } else {
          set({
            items: [
              ...currentItems,
              {
                ...product,
                quantity: Math.min(quantity, product.stock),
                selectedPrice: currentPrice,
              },
            ],
          });
        }
      },

      removeItem: (productId: number) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      updateQuantity: (productId: number, quantity: number) => {
        const product = get().items.find((item) => item.id === productId);
        if (product && quantity >= 1 && quantity <= product.stock) {
          set({
            items: get().items.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            ),
          });
        }
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const tieneOferta =
            item.oferta && item.offer_price && item.offer_price > 0;
          const price = tieneOferta ? item.offer_price! : item.price;
          return total + price * item.quantity;
        }, 0);
      },

      getItemQuantity: (productId: number) => {
        const item = get().items.find((item) => item.id === productId);
        return item?.quantity || 0;
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
