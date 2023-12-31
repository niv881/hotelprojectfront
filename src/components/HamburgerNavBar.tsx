import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../utils/UserContext';

const HamburgerNavBar = () => {
  const nav = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isManager, logout, isLoggedIn, isAdmin } = useContext(AuthContext);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="lg:hidden text-slate-800 dark:text-slate-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`lg:hidden absolute right-0 top-12 bg-white p-4 rounded-md shadow-md z-10 ${
          isMenuOpen ? '' : 'hidden'
        }`}
      >
        <ul className="flex flex-col space-y-2">
          {isManager && (
            <NavLink
              className="whitespace-nowrap text-slate-800 dark:text-slate-300"
              to="/postHotel"
            >
              Post New Hotel
            </NavLink>
          )}
          {isAdmin && (
            <NavLink
              className="whitespace-nowrap text-slate-800 dark:text-slate-300"
              to="/registerManager"
            >
              Register New Manager
            </NavLink>
          )}

          {isLoggedIn && (
            <div className="flex flex-col space-y-2">
              <NavLink
                className="whitespace-nowrap text-slate-800 dark:text-slate-300"
                to="/myOrders"
              >
                My Orders
              </NavLink>
              <button
                className="text-slate-800 dark:text-slate-300 whitespace-nowrap text-start "
                onClick={() => {
                  logout();
                  nav('/');
                }}
              >
                LogOut
              </button>
            </div>
          )}
          {!isLoggedIn && (
            <NavLink
              className="whitespace-nowrap text-slate-800 dark:text-slate-300"
              to="/login"
            >
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              className="whitespace-nowrap text-slate-800 dark:text-slate-300"
              to="/register"
            >
              Register
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerNavBar;
