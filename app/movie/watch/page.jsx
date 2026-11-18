
"use client";

import { useState } from "react";
import { Play, Share2, Link as LinkIcon, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MovieDetailPage() {
    const [playing, setPlaying] = useState(false);

    const movie = {
        id: 1,
        title: "Animation Motivation: Thread the Needle",
        studio: "Pixar",
        rating: "8.5",
        year: "2024",
        genre: "Animation",
        duration: "12 min",
        youtubeId: "xo2swVa5KPc",
        thumbnail: "https://img.youtube.com/vi/xo2swVa5KPc/maxresdefault.jpg",
        description:
            "Watch this exciting animated short featuring creativity, teamwork and an inspiring journey through animation.",
    };

    // No Movie Found
    if (!movie || !movie.id) {
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

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: movie.title,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
            }
        } catch (error) {
            console.log("Share cancelled or failed:", error);
        }
    };

    const handleWatchlist = () => {
        console.log("Added to watchlist:", movie.id);
    };

    return (
        <main className="min-h-screen bg-[#0d0b0b] text-white">

            {/* Video Section */}
            <section className="relative w-full overflow-hidden">
                <div className="relative aspect-video w-full bg-black">

                    {playing ? (
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${movie.youtubeId}?autoplay=1`}
                            title={movie.title}
                            className="absolute inset-0 h-full w-full"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            <img
                                src={movie.thumbnail}
                                alt={movie.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            {/* Movie Information */}
                            <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-blue-500 text-lg">
                                    ✨
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold sm:text-lg">
                                        {movie.title}
                                    </h2>
                                    <p className="text-xs text-gray-200">
                                        {movie.studio}
                                    </p>
                                </div>
                            </div>

                            {/* Play Button */}
                            <button
                                onClick={() => setPlaying(true)}
                                aria-label="Play movie"
                                className="absolute left-1/2 top-1/2 flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ff0033] transition hover:scale-110 hover:bg-red-600"
                            >
                                <Play size={30} fill="white" />
                            </button>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8">

                                <button
                                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/70"
                                    aria-label="Copy link"
                                >
                                    <LinkIcon size={20} />
                                </button>

                                <a
                                    href={`https://www.youtube.com/watch?v=${movie.youtubeId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-black/50 px-4 py-2 text-xs font-semibold sm:text-sm"
                                >
                                    Watch on ▶ YouTube
                                </a>

                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Movie Details */}
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

                        <Button
                            onClick={handleWatchlist}
                            className="h-10 gap-2 bg-[#303030] text-white hover:bg-[#414141]"
                        >
                            <Plus size={17} />
                            Add to watchlist
                        </Button>

                    </div>
                </div>

                {/* Movie Metadata */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-400">

                    <span className="flex items-center gap-1 text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        {movie.rating}
                    </span>

                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                    <span>•</span>
                    <span>{movie.duration}</span>

                </div>

                {/* Description */}
                <div className="mt-6 max-w-3xl">
                    <h2 className="mb-2 text-lg font-semibold">
                        About this movie
                    </h2>

                    <p className="text-sm leading-7 text-gray-400">
                        {movie.description}
                    </p>
                </div>

            </section>
        </main>
    );
}
