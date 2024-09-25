import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between px-4 md:px-[200px] py-4">
      {/* title section */}
      <h2 className="text-sm md:text-xl font-extrabold ">
        <Link to="/">Blog Market</Link>
      </h2>
      {/* Search box */}
      <div className="flex justify-center items-center space-x-1 ">
        <BsSearch />
        <input
          type="text"
          placeholder="Search a post"
          className="text-slate-400 outline-none px-3 py-2"
        />
      </div>
      {/* Aut sextion */}
      <div className="flex justify-between items-center  space-x-2 md:space-x-4">
        {!user ? (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/write">Write</Link>
          </h3>
        )}
        {!user ? (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/profile">Profile</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
