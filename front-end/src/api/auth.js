import api from "./client";

export async function login(email, password) {
  const res = await api.post("/token/", { email, password });
  return res.data; // { access, refresh }
}