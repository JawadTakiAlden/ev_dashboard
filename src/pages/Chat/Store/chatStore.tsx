import { create } from "zustand";

export interface ChatStore {
  selectedUser: any;
  selectUser: (user: any) => void;
}

export const useChat = create<ChatStore>((set, get) => ({
  selectedUser: null,
  selectUser: (user) => {
    set({ selectedUser: user });
  },
}));
