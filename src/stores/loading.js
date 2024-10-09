import { create } from "zustand";

const useLoading = create((set) => ({
  isLoading: false,
  textLoad: "Loading...",
  startLoading: (text = "Loading...") =>
    set(() => ({ isLoading: true, textLoad: text })),
  stopLoading: () => set(() => ({ isLoading: false, textLoad: "Loading..." })),
}));

export default useLoading;
