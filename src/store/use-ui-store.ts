import { create } from "zustand";

type UIState = {
  isNavOpen: boolean;
  isMobileMenuOpen: boolean;
  setNavOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  toggleMobileMenu: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  isNavOpen: false,
  isMobileMenuOpen: false,
  setNavOpen: (isOpen) => set({ isNavOpen: isOpen }),
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
