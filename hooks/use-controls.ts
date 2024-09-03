import { create } from "zustand";

interface Controls {
  isParticipantsOpen: boolean;
  onParticipantsOpen: () => void;
  onParticipantsClose: () => void;

  isChatOpen: boolean;
  onChatOpen: () => void;
  onChatClose: () => void;

  isPortfolioOpen: boolean;
  onPortfolioOpen: () => void;
  onPortfolioClose: () => void;
}

export const useControls = create<Controls>((set) => ({
  isParticipantsOpen: false,
  onParticipantsOpen: () => set({ isParticipantsOpen: true }),
  onParticipantsClose: () => set({ isParticipantsOpen: false }),

  isChatOpen: true,
  onChatOpen: () => set({ isChatOpen: true }),
  onChatClose: () => set({ isChatOpen: false }),

  isPortfolioOpen: false,
  onPortfolioOpen: () => set({ isPortfolioOpen: true }),
  onPortfolioClose: () => set({ isPortfolioOpen: false }),
}));
