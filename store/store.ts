import { create } from "zustand";

interface PromptStore {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

interface LogoStyleStore {
  selectedStyle: string;
  setSelectedStyle: (selectedStyle: string) => void;
}

const usePromptStore = create<PromptStore>((set) => ({
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),
}));

const useLogoStyleStore = create<LogoStyleStore>((set) => ({
  selectedStyle: "No Style",
  setSelectedStyle: (selectedStyle) => set({ selectedStyle }),
}));

export { usePromptStore, useLogoStyleStore };
