import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";

const sampleMovies = [
  { id: 1, title: "Inception", year: 2010, poster: "https://via.placeholder.com/300x400" },
  { id: 2, title: "The Matrix", year: 1999, poster: "https://via.placeholder.com/300x400" },
];

function App() {
  const [movies, setMovies] = useState(sampleMovies);

  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Here we will later call the API
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <MovieGrid movies={movies} />
    </div>
  )
}

export default App
