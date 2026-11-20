import axios from "axios"




export const ENDPOINT = {
    login: "/auth/login",
    signup: "/auth/signup",
    user: "/auth/user",
    // Movies
    fetchNowPlaying: "/movie/currentPlaying",
    fetchMovieDetails: (id) => `/movie/details/${id}`,
addToWatchlist: "/auth/user/watchlist",
goWishlist: "/auth/user/watchlist",
}

// export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})