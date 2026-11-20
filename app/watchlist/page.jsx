
"use client";

import React, { useEffect, useState } from "react";
import CategoriesSection from "../../components/section/CategoriesSection";
import { api, ENDPOINT } from "@/lib/api";

function Page() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getWatchlist = async () => {
            try {
                const resp = await api.get(ENDPOINT.goWishlist);

                setMovies(resp.data.message || []);
            } catch (error) {
                console.log("Watchlist error:", error);
            } finally {
                setLoading(false);
            }
        };

        getWatchlist();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0d0b0b] flex items-center justify-center text-white">
                Loading watchlist...
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0d0b0b]">
            <CategoriesSection
                title="My Watchlist"
                movies={movies}
            />
        </main>
    );
}

export default Page;
