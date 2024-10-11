import api from "./configApi";

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
