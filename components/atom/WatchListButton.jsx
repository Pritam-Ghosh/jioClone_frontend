
"use client";

import { Plus } from "lucide-react";
import { api, ENDPOINT } from "@/lib/api";

function WatchListButton({ movie }) {

const handleWatchlist = async () => {
    try {
        console.log("Endpoint:", ENDPOINT.addToWatchlist);
        console.log("Base URL:", api.defaults.baseURL);

        const resp = await api.post(
            ENDPOINT.addToWatchlist,
            {
                id: movie.id,
                name: movie.title,
                poster_path: movie.poster
            }
        );

            console.log(resp.data.message);
            alert("Movie added to watchlist!");

        } catch (error) {
    console.log("ERROR:", error);
    console.log("STATUS:", error.response?.status);
    console.log("BACKEND RESPONSE:", error.response?.data);

    alert(
        error.response?.data?.message ||
        error.response?.data?.err ||
        error.message
    );
}
    };

    return (
        <button
            onClick={handleWatchlist}
            className="h-10 flex items-center justify-center rounded-2xl px-6 gap-2 bg-[#303030] text-white hover:bg-[#414141]"
        >
            <Plus size={17} />
            Add to watchlist
        </button>
    );
}

export default WatchListButton;
