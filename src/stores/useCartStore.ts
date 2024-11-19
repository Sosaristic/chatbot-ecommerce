import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ICart = {
  items: Product[];
  isAppLoading: boolean;
  actions: {
    addToCart: (product: Product) => void;
    isInCart: (product: Product) => boolean;
    setIsAppLoading: () => void;
  };
};

export const useCartStore = create<ICart>()(
  persist(
    (set, get) => ({
      items: [],
      isAppLoading: true,
      actions: {
        addToCart: (product: Product) => {
          const copy = [...get().items, product];

          return set({
            items: copy,
          });
        },
        isInCart: (product: Product) => {
          return get().items.some((item) => item.id === product.id);
        },
        setIsAppLoading: () => set({ isAppLoading: false }),
      },
    }),
    {
      name: 'user-cart',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        if (state) {
          state.actions.setIsAppLoading();
        }
      },
    }
  )
);
