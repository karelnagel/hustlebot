import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Store = {
  start: () => void;
};

export const useChat = create(
  persist<Store>(
    (set, get) => ({
      start: () => {
        console.log("asdf");
      },
    }),
    { name: "chat" }
  )
);
