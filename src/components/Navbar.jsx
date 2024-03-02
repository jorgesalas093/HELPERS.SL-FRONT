import { Link, NavLink } from "react-router-dom";
import HelpersLogoIndex from "../components/HelppersLogo/HelpersLogoIndex";
import { useContext } from "react";
import AuthContext from '../contexts/AuthContext';
import { logout } from "../stores/AccessTokenStore";

const Navbar = () => {
  const { user, isAuthFetched } = useContext(AuthContext);

  const protectedRoutes = [
    {
      to: '/profile',
      text: 'Profile'
    },
    {
      to: '/alljobs',
      text: 'Jobs'
    },
  ];

  const unprotectedRoutes = [
    {
      to: '/login',
      text: 'Login',
    },
    {
      to: '/register',
      text: 'Register'
    },
    {
      to: '/alljobs',
      text: 'Jobs'
    },
  ];

  const getRoutesToShow = () => {
    if (isAuthFetched) {
      if (user) {
        return protectedRoutes;
      } else {
        return unprotectedRoutes;
      }
    } else {
      return null;
    }
  };

  const routes = getRoutesToShow();
  const hasUser = isAuthFetched && user;

  return (
    <div className="bg-gradient-to-r from-gray-400 via-blue-500 to-gray-500 p-2 h-[50px] flex items-center">
      <div className="flex justify-between items-center max-w-container mx-auto w-full">
        <Link to="/">
          <div className="flex items-center">
            <HelpersLogoIndex/>
            <span className="text-white ml-2 text-lg font-semibold"></span>
          </div>
        </Link>

        <div className="flex gap-x-3">
          {routes ? routes.map((route, index) => (
            <NavLink key={route.to} to={route.to} className="text-white hover:text-he-light-gray transform hover:scale-110 transition duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              {route.text}
            </NavLink>
          )) : null}
          {hasUser ? (
            <button className="text-white hover:text-he-light-gray transform hover:scale-110 transition duration-300" onClick={logout}>
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;