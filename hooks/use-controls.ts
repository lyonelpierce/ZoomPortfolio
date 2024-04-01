import { create } from "zustand";

interface Controls {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useControls = create<Controls>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
