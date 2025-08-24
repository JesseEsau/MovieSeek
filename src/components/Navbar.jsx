function Navbar() {
    return (
      <nav className="bg-gray-800 w-full p-4 m-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">🎬 MovieSeek</h1>
          <div>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">About</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  