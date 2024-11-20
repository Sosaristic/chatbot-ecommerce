import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ICart = {
  items: Product[];
  isAppLoading: boolean;
  setIsAppLoading: () => void;

  addToCart: (product: Product) => void;
  isInCart: (product: Product) => boolean;
  increaseQty: (product: Product) => void;
  decreaseQty: (product: Product) => void;
  getQty: (product: Product) => number;
  deleteItem: (product: Product) => void;
  totalAmount: () => number;
  totalItems: () => number;
  clearCart: () => void;
};

export const useCartStore = create<ICart>()(
  persist(
    (set, get) => ({
      items: [],
      isAppLoading: true,
      setIsAppLoading: () => set({ isAppLoading: false }),

      addToCart: (product: Product) => {
        set({ items: [...get().items, { ...product, qty: 1 }] });
      },
      isInCart: (product: Product) => {
        return get().items.some((item) => item.id === product.id);
      },
      increaseQty: (product: Product) => {
        const index = get().items.findIndex((item) => item.id === product.id);
        if (index === -1) {
          set({ items: [...get().items, { ...product, qty: 1 }] });
        } else {
          const updatedItems = [...get().items];
          updatedItems[index].qty = updatedItems[index].qty! + 1;
          set({ items: updatedItems });
        }
      },
      decreaseQty: (product: Product) => {
        const index = get().items.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          const updatedItems = [...get().items];
          updatedItems[index].qty = updatedItems[index].qty! - 1;
          set({ items: updatedItems });
        }
      },
      getQty: (product: Product) => {
        const index = get().items.findIndex((item) => item.id === product.id);

        return get().items[index]?.qty || 0;
      },
      deleteItem: (product: Product) => {
        const index = get().items.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          const updatedItems = [...get().items];
          updatedItems.splice(index, 1);
          set({ items: updatedItems });
        }
      },
      totalAmount: () => {
        return get().items.reduce((acc, item) => {
          return acc + item.price * item.qty!;
        }, 0);
      },
      totalItems: () => {
        return get().items.reduce((acc, item) => {
          return acc + item.qty!;
        }, 0);
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'user-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
