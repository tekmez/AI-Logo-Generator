import { create } from "zustand";

interface Store {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const usePromptStore = create<Store>((set) => ({
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),
}));

export default usePromptStore;
