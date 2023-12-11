import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeContext from "../utils/DarkModeContext";
import ToggleToDarkMode from "../utils/ToggleToDarkMode";
import AuthContext from "../utils/UserContext";
import HamburgerNavBar from "./HamburgerNavBar";

const isActive = (o: any) =>
  o.isActive
    ? "bg-slate-700 dark:bg-slate-400 text-white dark:text-black p-1 px-3 mx-3 rounded-md font-medium"
    : "text-black-300 hover:bg-slate-700 dark:hover:bg-slate-400 dark:hover:text-black dark:text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium";

const Navbar = () => {
  const nav = useNavigate();
  const { toggleDarkMode } = useContext(DarkModeContext);

  const { isManager, logout, isLoggedIn, isAdmin } = useContext(AuthContext);

  return (
    <nav className="flex justify-start items-center pe-10 mb-3 p-2 bg-slate-400  dark:bg-slate-800 ">
      <NavLink to={"/home"} className={isActive}>
        Home
      </NavLink>
      <NavLink to={"/about"} className={isActive}>
        About
      </NavLink>

      <div className="flex-1"></div>
      <div className="flex items-center me-2">
        <HamburgerNavBar />
      </div>

      <div className="hidden lg:flex sm:items-center">
        {isManager && (
          <NavLink className={isActive} to="/postHotel">
            Post New Hotel
          </NavLink>
        )}
        {isAdmin && (
          <NavLink className={isActive} to="/registerManager">
            Register New Manager
          </NavLink>
        )}
        {isLoggedIn && (
          <div>
            <button
              className="text-slate-800 dark:text-slate-300 p-1 px-3 mx-3 rounded-md font-medium text-sm hover:text-white hover:bg-slate-700 dark:hover:bg-slate-400 dark:hover:text-black"
              onClick={() => {
                logout();
                nav("/");
              }}
            >
              LogOut
            </button>
            <NavLink className={isActive} to="/myOrders">
              My Orders
            </NavLink>
          </div>
        )}
        {!isLoggedIn && (
          <NavLink className={isActive} to="/login">
            Login
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink className={isActive} to="/register">
            Register
          </NavLink>
        )}
      </div>

      <ToggleToDarkMode onClick={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
