import { useState } from "react";
import SearchBar from "./SearchBar";
import MovieGrid from "./MovieGrid"
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
        
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Search) {
        const formatted = data.Search.map((m) => ({
          id: m.imdbID,
          title: m.Title,
          year: m.Year,
          poster: m.Poster !== "N/A" ? m.Poster : "https://via.placeholder.com/300x400",
        }));
        setMovies(formatted);
      } else {
        setMovies([]);
        setError("No results found!")
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Something went wrong. Try again!")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4">
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <p className="text-center mt-6 text-purple-400">Loading...</p>
      )}
      {!loading && error && (
        <p className="text-center mt-6 text-red-400">{error}</p>
      )}
      {!loading && !error && (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}

export default Home;
