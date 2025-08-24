function MovieGrid({ movies }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-purple-400">{movie.title}</h2>
              <p className="text-gray-300">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default MovieGrid;
  