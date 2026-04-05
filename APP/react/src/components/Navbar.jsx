import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="flex w-full justify-between items-center px-4 bg-amber-500 h-[5rem] top-0">
      <h2 className="text-xl font-bold">LOGO</h2>
      <ul className="flex gap-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      {currentUser ? (
        <button
          onClick={() => logout()}
          className="transition-colors cursor-pointer hover:bg-red-700 p-2 px-4 bg-red-950 font-bold rounded-md text-white "
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-4">
          <Link to={"/login"}>
            <button className="transition-colors cursor-pointer hover:bg-cyan-700 p-2 px-4 bg-cyan-950 font-bold rounded-md text-white ">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="transition-colors cursor-pointer hover:bg-blue-700 p-2 px-4 bg-blue-900 font-bold rounded-md text-white">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
