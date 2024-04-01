import { create } from "zustand";

interface ContactTrigger {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useContactTrigger = create<ContactTrigger>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
