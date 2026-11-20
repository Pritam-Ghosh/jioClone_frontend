
import FilterBadge from "@/components/section/FilterBadge";
import HeroCarousel from "@/components/section/HeroCarousel";
import CategoriesSection from "@/components/section/CategoriesSection";
import { api, ENDPOINT } from "@/lib/api";

export default function Home() {

    const list = [
        {
            label: "Top Rated",
            href: "top-rated"
        },
        {
            label: "Popular",
            href: "popular"
        },
        {
            label: "Action",
            href: "action"
        },
    ];

    const moviesCat = [
        {
            id: 1,
            title: "The Shawshank Redemption",
            image: "/movies/shawshank.jpg",
        },
        {
            id: 2,
            title: "The Godfather",
            image: "/movies/godfather.jpg",
        },
        {
            id: 3,
            title: "The Godfather Part II",
            image: "/movies/godfather2.jpg",
        },
        {
            id: 4,
            title: "Schindler's List",
            image: "/movies/schindlers-list.jpg",
        },
        {
            id: 5,
            title: "12 Angry Men",
            image: "/movies/12-angry-men.jpg",
        },
        {
            id: 6,
            title: "Spirited Away",
            image: "/movies/spirited-away.jpg",
        },
    ];

    // Home Banner Data
    async function getHomeBannerData() {
        try {
            // Step 1: Get movie list
            const resp = await api.get(ENDPOINT.fetchNowPlaying);

            const movieList = resp.data.message.titles;

            // Step 2: Get movie details
            const movieDetails = await Promise.all(
                movieList.slice(0, 10).map(async (movie) => {

                    const details = await api.get(
                        ENDPOINT.fetchMovieDetails(movie.id)
                    );

                    return details.data.message;
                })
            );

            // Step 3: Return movie details
            return movieDetails;

        } catch (err) {
            console.log("Movie Error:", err.message);
            return [];
        }
    }

    return (
        <>
            <FilterBadge list={list} />

            <HeroCarousel fetcher={getHomeBannerData} />

            <CategoriesSection
                title="Popular Movies"
                movies={moviesCat}
            />
        </>
    );
}
