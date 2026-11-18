
"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {Skeleton} from "../atom/Skeleton"
import { Suspense } from "react";

const movies = [
    {
        id: 1,
        title: "Transformers",
        image: "/carousel/transformers.jpg",
    },
    {
        id: 2,
        title: "Borderlands",
        image: "/carousel/borderlands.jpg",
    },
    {
        id: 3,
        title: "Movie Three",
        image: "/carousel/movie3.jpg",
    },
    {
        id: 4,
        title: "Movie Four",
        image: "/carousel/movie4.jpg",
    },
];

function BannerSection() {
    return (
        <>
        <Suspense fallback={<HeroFallBack/>} >
        <p>Origianl Movie Data</p>
        </Suspense>
        </>
    )
}


export default function HeroCarousel({ movies: movieList = movies }) {
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

                    {movies.map((movie) => (
                        <CarouselItem
                            key={movie.id}
                            className="basis-[85%] pl-2 sm:basis-[70%] md:basis-[55%] md:pl-3"
                        >
                            <div className="relative h-[240px] w-full overflow-hidden rounded-lg sm:h-[350px] md:h-[450px] lg:h-[550px]">

                                <Image
                                    src={movie.image}
                                    alt={movie.title}
                                    fill
                                    priority={movie.id === 2}
                                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, 55vw"
                                    className="object-cover"
                                />

                            </div>
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

function HeroFallBack() {
    return (
        <div className="flex items-center justify-center gap-5">
            <Skeleton className="h-[500px] w-[700px] rounded-lg" />
            <Skeleton className="h-[500px] w-[700px] rounded-lg" />
            <Skeleton className="h-[500px] w-[700px] rounded-lg" />
        </div>
    )
}


