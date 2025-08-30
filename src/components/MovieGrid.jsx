import { Link } from "react-router-dom";

function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-purple-400">{movie.title}</h2>
              <p className="text-gray-300">{movie.year}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieGrid;
