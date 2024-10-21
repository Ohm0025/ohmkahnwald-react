import axios from "axios";
import api from "./configApi";

// export const createPostBlog = async (postObj) => {
//   const res = await api.post("/postBlog", postObj);
//   return res.data;
// };

export const createPostBlog = async (postObj) => {
  const formData = new FormData();
  formData.append("title", postObj.title);
  formData.append("content", postObj.content);
  formData.append("image", postObj.thumbnail);
  // const res = await api.post("/postBlog", formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // });
  const res = await axios({
    method: "post",
    url: `${import.meta.env.VITE_API_URL}/postBlog`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
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
