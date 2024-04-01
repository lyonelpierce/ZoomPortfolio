import { create } from "zustand";

interface Controls {
  isParticipantsOpen: boolean;
  onParticipantsOpen: () => void;
  onParticipantsClose: () => void;

  isChatOpen: boolean;
  onChatOpen: () => void;
  onChatClose: () => void;
}

export const useControls = create<Controls>((set) => ({
  isParticipantsOpen: false,
  onParticipantsOpen: () => set({ isParticipantsOpen: true }),
  onParticipantsClose: () => set({ isParticipantsOpen: false }),

  isChatOpen: false,
  onChatOpen: () => set({ isChatOpen: true }),
  onChatClose: () => set({ isChatOpen: false }),
}));
