import axios from "axios"




export const ENDPOINT = {
    login: "/api/auth/login",
    signup: "/api/auth/signup",
    user: "/api/auth/user",
}

// export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})