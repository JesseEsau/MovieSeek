function SearchBar({ onSearch }) {
    return (
      <div className="my-6 flex justify-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-2/3 p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch(e.target.value);
          }}
        />
      </div>
    );
  }
  
  export default SearchBar;
  