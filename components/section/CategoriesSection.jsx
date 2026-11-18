
"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CategoriesSection({
  title = "Top Rated",
  movies = [],
}) {
  return (
    <section className="w-full bg-[#0d0b0b] py-6">

      <div className="mx-auto w-full max-w-[1800px] px-6 lg:px-9">

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >

          {/* Section Header */}
          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">

              <CarouselPrevious className="static h-9 w-9 translate-y-0 rounded-full border-none bg-[#303030] text-white hover:bg-[#e6007e] hover:text-white" />

              <CarouselNext className="static h-9 w-9 translate-y-0 rounded-full border-none bg-[#303030] text-white hover:bg-[#e6007e] hover:text-white" />

            </div>

          </div>

          {/* Movie Carousel */}
          <CarouselContent className="-ml-3">

            {movies.map((movie) => {
              const image =
                movie.image ||
                movie.poster ||
                (movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "");

              return (
                <CarouselItem
                  key={movie.id}
                  className="basis-[48%] pl-3 sm:basis-[30%] md:basis-[23%] lg:basis-[18%] xl:basis-[16.66%]"
                >

                  <div className="group relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-[#252525]">

                    {image && (
                      <Image
                        src={image}
                        alt={movie.title || "Movie poster"}
                        fill
                        sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 17vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Movie Title */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="line-clamp-2 text-sm font-semibold text-white">
                        {movie.title}
                      </h3>
                    </div>

                  </div>

                </CarouselItem>
              );
            })}

          </CarouselContent>

        </Carousel>

      </div>

    </section>
  );
}
