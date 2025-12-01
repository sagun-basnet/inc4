const Navbar = ({ userName, age }) => {
  console.log();

  return (
    <div className="flex w-full justify-between items-center px-4 bg-amber-500 h-[5rem] fixed top-0">
      <h2 className="text-xl font-bold">LOGO</h2>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      {age < 26 && <span>{age}</span>}

      {userName ? (
        <h1>{userName}</h1>
      ) : (
        <div className="flex gap-4">
          <button className="transition-colors cursor-pointer hover:bg-cyan-700 p-2 px-4 bg-cyan-950 font-bold rounded-md text-white ">
            {title === "login" ? "Login" : "Register"}
          </button>
          <button className="transition-colors cursor-pointer hover:bg-blue-700 p-2 px-4 bg-blue-900 font-bold rounded-md text-white">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
