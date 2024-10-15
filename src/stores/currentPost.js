import { create } from "zustand";

const useCurrentPost = create((set) => ({
  currentPostBlogId: "",
  currentPost: null,
  setCurrentPost: (post) => set(() => ({ currentPost: { ...post } })),
  setCurrentPostBlogId: (id) => set(() => ({ currentPostBlogId: id })),
}));

export default useCurrentPost;
