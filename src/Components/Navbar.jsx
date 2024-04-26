import { Link, NavLink } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink className="px-1 py-1 mx-1 " to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink className="px-1 py-1 mx-1 " to="/touristSpot">
        {" "}
        All Tourists Spot{" "}
      </NavLink>
      <NavLink className="px-1 py-1 mx-1 " to="/contact">
        {" "}
        Contact{" "}
      </NavLink>
      <NavLink className="px-1 py-1 mx-1 " to="/addSpot">
        {" "}
        Add Tourists Spot{" "}
      </NavLink>
      <NavLink className="px-1 py-1 mx-1 " to="/myList">
        My List{" "}
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className=" font-bold text-xl">
            JOURNEY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <Link className="border p-2" to="/login">
              {" "}
              Login{" "}
            </Link>
          </div>

          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <LuSun className="swap-off fill-current w-10 h-10" > </LuSun>

              {/* moon icon */}
              <LuMoonStar className="swap-on fill-current w-10 h-10" > </LuMoonStar>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
