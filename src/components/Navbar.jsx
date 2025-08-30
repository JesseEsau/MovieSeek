import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
      <nav className="bg-gray-800 w-full p-4 m-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">🎬 MovieSeek</h1>
          <div className="flex gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          About
        </NavLink>
      </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  