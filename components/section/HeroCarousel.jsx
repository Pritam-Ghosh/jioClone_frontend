
import React, { Suspense } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "../atom/Skeleton";
import Link from "next/link";

// 1. Wrapper component
async function BannerSection({ fetcher }) {
    
    return (
        <Suspense fallback={<HeroFallBack />}>
            <BannerSectionContent fetcher={fetcher} />
        </Suspense>
    );
}

// 2. Async component
async function BannerSectionContent({ fetcher }) {

    const movieList = await fetcher();

    if (!movieList || movieList.length === 0) {
        return <p className="text-white">No movies found.</p>;
    }

    return (
        <section className="w-full overflow-hidden bg-black py-5">

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="relative w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-3">

                    {movieList.map((movie) => (
                        <CarouselItem
                            key={movie.id}
                            className="basis-[85%] pl-2 sm:basis-[70%] md:basis-[55%] md:pl-3"
                        >
<Link href={`/movie/watch?id=${movie.id}`}
                                className="relative block h-[240px] w-full overflow-hidden rounded-lg sm:h-[350px] md:h-[450px] lg:h-[550px]"
                            >
                                <img
                                    src={movie.poster}
                                    alt={movie.title || "Movie poster"}
                                    className="h-full w-full object-cover"
                                />
                            </Link>
                        </CarouselItem>
                    ))}

                </CarouselContent>

                {/* Navigation Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 md:bottom-6 md:right-8">

                    <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-full border-none bg-black/90 text-white hover:bg-[#e6007e] hover:text-white md:h-14 md:w-14" />

                    <CarouselNext className="static translate-y-0 h-11 w-11 rounded-full border-none bg-black/90 text-white hover:bg-[#e6007e] hover:text-white md:h-14 md:w-14" />

                </div>

            </Carousel>

        </section>
    );
}

// 3. Skeleton fallback
function HeroFallBack() {
    return (
        <div className="flex items-center justify-center gap-5">
            <Skeleton className="h-[500px] w-[700px] rounded-lg" />
            <Skeleton className="h-[500px] w-[700px] rounded-lg" />
            <Skeleton className="h-[500px] w-[700px] rounded-lg" />
        </div>
    );
}

export default BannerSection;
