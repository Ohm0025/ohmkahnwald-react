import axios from "axios";
import api from "./configApi";
import { api_url } from "./configApi";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.get("/auth/logout");
  return res.data;
};

export const register = async (registerObj) => {
  const res = await api.post("/user/register", registerObj);
  return res.data;
};

export const verifyEmail = async (code) => {
  const res = await api.post("/user/verify-email", { code });
  return res.data;
};

export const getUser = async () => {
  const res = await api.get("/user");
  return res.data;
};

export const updateUser = async (updatedObj) => {
  const res = await api.patch("/user/updateProfile", { updatedObj });
  return res.data;
};

export const updateImgProfile = async (uploadedImage) => {
  const formData = new FormData();
  formData.append("image", uploadedImage);
  const res = await api.patch("/user/updateImgProfile", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data;
};

export const onQueryUser = async (search) => {
  const res = await api.get("/user/query-user?search=" + search);
  return res.data;
};
