import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=c7a8a276`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center mt-6 text-purple-400">Loading...</p>;

  if (!movie) return <p className="text-center mt-6 text-red-400">Movie not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster} alt={movie.Title} className="w-64 rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold text-purple-400">{movie.Title}</h1>
          <p className="text-gray-300 italic">{movie.Year} • {movie.Genre}</p>
          <p className="mt-4 text-gray-200">{movie.Plot}</p>
          <p className="mt-2 text-gray-400">⭐ {movie.imdbRating} / 10</p>
          <p className="mt-2 text-gray-400">🎬 Directed by {movie.Director}</p>
          <p className="mt-2 text-gray-400">👥 Cast: {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
