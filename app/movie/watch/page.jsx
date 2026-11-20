
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { api, ENDPOINT } from "@/lib/api";

import {
    Play,
    Share2,
    Link as LinkIcon,
    Star,
    Plus
} from "lucide-react";

import { Button } from "@/components/ui/button";
import WatchListButton from "../../../components/atom/WatchListButton";

export default function MovieDetailPage() {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [playing, setPlaying] = useState(false);
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    console.log("Movie ID:", id);

    const getMovieDetails = async () => {
        try {
            console.log("Calling backend...");

            const resp = await api.get(
                ENDPOINT.fetchMovieDetails(id),
                { timeout: 10000 }
            );

            console.log("Backend response:", resp.data);

            setMovie(resp.data.message);

        } catch (error) {
            console.log("API ERROR:", error.message);
            console.log("Error response:", error.response?.data);
            setMovie(null);

        } finally {
            setLoading(false);
        }
    };

    if (id) {
        getMovieDetails();
    } else {
        console.log("Movie ID is missing");
        setLoading(false);
    }

}, [id]);

    const getYoutubeId = (url) => {

        if (!url) return "";

        try {
            const parsedUrl = new URL(url);

            if (parsedUrl.hostname.includes("youtu.be")) {
                return parsedUrl.pathname.slice(1);
            }

            return parsedUrl.searchParams.get("v") || "";

        } catch (error) {
            console.log("Invalid trailer URL:", error);
            return "";
        }
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-[#0d0b0b] flex items-center justify-center text-white">
                Loading movie...
            </main>
        );
    }

    if (!movie) {
        return (
            <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0d0b0b] px-4 text-center text-white">

                <h1 className="text-2xl font-bold">
                    No Movie Found
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Sorry, we couldn't find the movie you're looking for.
                </p>

                <Button
                    onClick={() => window.history.back()}
                    className="mt-5 bg-[#e52278] hover:bg-[#c91865]"
                >
                    Go Back
                </Button>

            </main>
        );
    }

    const youtubeId = getYoutubeId(movie.trailer);

    const handleShare = async () => {
        try {

            if (navigator.share) {
                await navigator.share({
                    title: movie.title,
                    url: window.location.href,
                });

            } else {
                await navigator.clipboard.writeText(
                    window.location.href
                );

                alert("Link copied!");
            }

        } catch (error) {
            console.log("Share cancelled or failed:", error);
        }
    };



    return (

        <main className="min-h-screen bg-[#0d0b0b] text-white">

            <section className="relative w-full overflow-hidden">

                <div className="relative aspect-video w-full bg-black">

                    {playing && youtubeId ? (

                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
                            title={movie.title}
                            className="absolute inset-0 h-full w-full"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />

                    ) : (

                        <>

                            <img
                                src={
                                    movie.trailer_thumbnail ||
                                    movie.poster
                                }
                                alt={movie.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-6">

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-blue-500 text-lg">
                                    ✨
                                </div>

                                <div>

                                    <h2 className="text-sm font-bold sm:text-lg">
                                        {movie.title}
                                    </h2>

                                    <p className="text-xs text-gray-200">
                                        {movie.year}
                                    </p>

                                </div>

                            </div>

                            {youtubeId ? (

                                <button
                                    onClick={() => setPlaying(true)}
                                    aria-label="Play trailer"
                                    className="absolute left-1/2 top-1/2 flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ff0033] transition hover:scale-110 hover:bg-red-600"
                                >
                                    <Play size={30} fill="white" />
                                </button>

                            ) : (

                                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                                    Trailer not available
                                </p>

                            )}

                            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8">

                                <button
                                    onClick={() =>
                                        navigator.clipboard.writeText(
                                            window.location.href
                                        )
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/70"
                                    aria-label="Copy link"
                                >
                                    <LinkIcon size={20} />
                                </button>

                                {youtubeId && (

                                    <a
                                        href={movie.trailer}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full bg-black/50 px-4 py-2 text-xs font-semibold sm:text-sm"
                                    >
                                        Watch on ▶ YouTube
                                    </a>

                                )}

                            </div>

                        </>

                    )}

                </div>

            </section>

            <section className="mx-auto max-w-[1600px] px-5 py-6 sm:px-8">

                <div className="flex flex-wrap items-center justify-between gap-4">

                    <h1 className="text-xl font-bold sm:text-2xl">
                        {movie.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3">

                        <Button
                            onClick={handleShare}
                            className="h-10 gap-2 bg-[#e52278] text-white hover:bg-[#c91865]"
                        >
                            <Share2 size={17} />
                            Share
                        </Button>

<WatchListButton movie={movie} />

                    </div>

                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-400">

                    <span className="flex items-center gap-1 text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        {movie.user_rating ?? "N/A"}
                    </span>

                    <span>
                        {movie.year || "N/A"}
                    </span>

                    <span>•</span>

                    <span>
                        {movie.genre_names?.join(", ") || "N/A"}
                    </span>

                    <span>•</span>

                    <span>
                        {movie.runtime_minutes
                            ? `${movie.runtime_minutes} min`
                            : "N/A"}
                    </span>

                </div>

                <div className="mt-6 max-w-3xl">

                    <h2 className="mb-2 text-lg font-semibold">
                        About this movie
                    </h2>

                    <p className="text-sm leading-7 text-gray-400">
                        {movie.plot_overview ||
                            "No description available."}
                    </p>

                </div>

            </section>

        </main>

    );

}
