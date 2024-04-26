import { Link, NavLink } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { useEffect, useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
const [theme, setTheme] = useState('light');
const [open, setOpen] =useState(false)

useEffect(() => {
  const localTheme = localStorage.getItem('theme');
  if(localTheme){
    setTheme(localTheme);
  }
},[])

// console.log(theme, 'theme age')

useEffect(()=>{
  localStorage.setItem('theme', theme);
  document.querySelector("html").setAttribute("data-theme", theme);
},[theme])

const handleTheme = (e) => {
  const value = e.target.checked;
  // console.log(value, 'value')
  if(value){
    setTheme('night')
  }
  else{
    setTheme('light')
  }
}

// console.log(theme, 'theme pore')

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
      <div className="navbar bg-base-100 px-10 shadow-lg z-10">
        <div className="navbar-start">
          <div onClick={() => setOpen(!open)} className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {
                open === true ?  <MdOutlineRestaurantMenu className="text-2xl" > </MdOutlineRestaurantMenu> :
                <RiMenuAddLine className="text-2xl" > </RiMenuAddLine>
              }
            </div>
            <ul tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 ${open === true ? '' : " hidden" } `}
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
              onClick={handleTheme}
                type="checkbox"
                className="theme-controller"
                value="night"
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
