import api from "../client"

export async function loginGoogle(access_token) {
    const res = await api.post("/auth/google/",{access_token})
    return res.data // { access, refresh }
}