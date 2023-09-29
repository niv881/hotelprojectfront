import { NavLink } from "react-router-dom";
import DarkModeContext from "../utils/DarkModeContext";
import { useContext, useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import AuthContext from "../utils/UserContext";

const isActive = (o: any) =>
  o.isActive
    ? "bg-green-700 dark:bg-green-400 text-white dark:text-black p-1 px-3 mx-3 rounded-md font-medium"
    : "text-black-300 hover:bg-green-700 dark:hover:bg-green-400 dark:hover:text-black dark:text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const { isManager, logout, isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="flex justify-start items-center pe-10 mb-3 bg-green-300 p-2 dark:bg-green-800 ">

      <NavLink to={"/home"} className={isActive}>
        Home
      </NavLink>
      <NavLink to={"/about"} className={isActive}>
        About
      </NavLink>
      <button
        className="ms-3 dark:text-white"
        onClick={() => {
          toggleDarkMode();
        }}
      >
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </button>

      <div className="flex-1"></div>
      <div className="hidden sm:flex sm:items-center">
        {isManager && (
          <NavLink className={isActive} to="/postHotel">
            Post New Hotel
          </NavLink>
        )}
        {isLoggedIn && (
          <button
            className="text-black dark:text-white p-1 px-3 mx-3 rounded-md font-medium text-sm"
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </button>
        )}
        {!isLoggedIn && (
          <NavLink className={isActive} to="/login">
            Login
          </NavLink>
        )}
      </div>
      {!isLoggedIn && (
        <NavLink className={isActive} to="/register">
          Register
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
