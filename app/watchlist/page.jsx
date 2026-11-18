import React from 'react'
import CategoriesSection from '../../components/section/CategoriesSection'

function page() {
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

           <CategoriesSection
        title="Popular Movies"
        movies={moviesCat}
      />
</>
  )
}

export default page