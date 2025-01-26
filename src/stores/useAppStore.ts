import { create } from 'zustand';

type IType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

export const useAppStore = create<IType>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}));
