import { Link } from "react-router-dom";

const Navbar = () => {
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

      <div className="flex gap-4">
        <button className="transition-colors cursor-pointer hover:bg-cyan-700 p-2 px-4 bg-cyan-950 font-bold rounded-md text-white ">
          Login
        </button>
        <button className="transition-colors cursor-pointer hover:bg-blue-700 p-2 px-4 bg-blue-900 font-bold rounded-md text-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
