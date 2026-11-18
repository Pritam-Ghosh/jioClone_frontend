import React from 'react'
import FilterBadge from "@/components/section/FilterBadge"
import HeroCarousel from "@/components/section/HeroCarousel"
import CategoriesSection from "@/components/section/CategoriesSection"
function page() {

  const list = [
    {
      label: "Top Rated",
      herf: "top-rated"
    },
    {
      label: "Populer",
      herf: "Populer"
    },
    {
      label: "Action",
      herf: "action"
    },
  ]


  const movies = [
    {
      id: 1,
      title: "Sci-Fi Adventure",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400",
    },
    {
      id: 2,
      title: "Space Exploration",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400",
    },
    {
      id: 3,
      title: "Action Adventure",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1400",
    },
    {
      id: 4,
      title: "Fantasy World",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400",
    },
    {
      id: 5,
      title: "Mystery",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400",
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

  
  return (
    <>
      <FilterBadge list={list} />


      <HeroCarousel movies={movies} />


           <CategoriesSection
        title="Popular Movies"
        movies={moviesCat}
      />
    </>
  )
}

export default page