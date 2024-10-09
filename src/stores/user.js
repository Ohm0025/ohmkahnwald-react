import { create } from "zustand";

const useUser = create((set) => ({
  userObj: {},
  setUser: (newUserObj) => set(() => ({ userObj: newUserObj })),
}));

export default useUser;
