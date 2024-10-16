import api from "./configApi";

export const createPostBlog = async (postObj) => {
  const res = await api.post("/postBlog", postObj);
  return res.data;
};

export const getCurrentPost = async (postId) => {
  const res = await api.get("/postBlog/" + postId);
  return res.data;
};

export const getUserPosts = async () => {
  const res = await api.get("/postBlog/getUserPosts");
  return res.data;
};
