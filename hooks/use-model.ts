import { create } from "zustand";

interface AIModel {
  messages: string[];
  currentMessage: any;
  loading: boolean;
  askAI: (question: string) => void;
}

export const useAIModel = create<AIModel>((set, get: any) => ({
  messages: [],
  currentMessage: null,
  loading: false,
  askAI: async (question: string) => {
    if (!question) {
      return;
    }

    const alreadyAsked = get().messages.some(
      (msg: any) => msg.question === question
    );
    if (alreadyAsked) {
      return;
    }

    const message: any = {
      question,
      id: get().messages.length,
    };

    set((state: any) => ({
      messages: [...state.messages, message],
      loading: true,
    }));

    const speech = get().speech;

    // Ask AI
    const res = await fetch(`/api/ai?question=${question}`);
    const data = await res.json();
    console.log(data);

    message.answer = data;
    message.speech = speech;

    set(() => ({
      currentMessage: message,
    }));

    set((state: any) => ({
      messages: state.messages.map((msg: any) =>
        msg.id === message.id ? { ...msg, answer: message.answer } : msg
      ),
      loading: false,
    }));

    get().playMessage(message);
  },
  playMessage: async (message: any) => {
    set(() => ({
      currentMessage: message,
    }));

    if (!message.audioPlayer) {
      set(() => ({
        loading: true,
      }));
      // Get TTS
      const audioRes = await fetch(`/api/tts?text=${message.answer}`);
      const audio = await audioRes.blob();
      const visemesHeader = await audioRes.headers.get("visemes");
      const visemes = visemesHeader ? JSON.parse(visemesHeader) : null;
      const audioUrl = URL.createObjectURL(audio);
      const audioPlayer = new Audio(audioUrl);

      message.visemes = visemes;
      message.audioPlayer = audioPlayer;
      message.audioPlayer.onended = () => {
        set(() => ({
          currentMessage: null,
        }));
      };
      set(() => ({
        loading: false,
        messages: get().messages.map((m: any) => {
          if (m.id === message.id) {
            return message;
          }
          return m;
        }),
      }));
    }

    message.audioPlayer.currentTime = 0;
    message.audioPlayer.play();
  },
  stopMessage: (message: any) => {
    message.audioPlayer.pause();
    set(() => ({
      currentMessage: null,
    }));
  },
}));
