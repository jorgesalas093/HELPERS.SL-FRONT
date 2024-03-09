import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from '../contexts/AuthContext';
import { logout } from "../stores/AccessTokenStore";
import AllChats from "../pages/AllChats";
import HelpersLogoIndex from "../components/HelppersLogo/HelpersLogoIndex";


const Navbar = () => {
  const { user, isAuthFetched } = useContext(AuthContext);
  

  const protectedRoutes = [
    {
      to: '/profile',
      text: 'Profile'
    },
    {
      to: '/alljobs',
      text: 'All Workers'
    },
    {

      text: 'Chats',
      dropdown: true,
      subroutes: [
        {
          to: '/chats',
          text: <AllChats />
        },

      ]
    },
    {
      to: '/workwithus',
      text: 'Work With Us'
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

  const [showChatsDropdown, setShowChatsDropdown] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-400 via-blue-500 to-gray-500 p-2 h-[50px] flex items-center">
      <div className="flex justify-between items-center max-w-container mx-auto w-full">
        <Link to="/">
          <div className="flex items-center">
            <HelpersLogoIndex />
            <span className="text-white ml-2 text-lg font-semibold"></span>
          </div>
        </Link>

        <div className="flex gap-x-3">
          {routes ? routes.map((route, index) => (
            <div key={route.to || index} className="relative">
              {route.dropdown ? (
                <>
                  <button
                    onClick={() => setShowChatsDropdown(!showChatsDropdown)}
                    className="text-white hover:text-he-light-gray transform hover:scale-200 transition duration-200"
                  >
                    {route.text}
                  </button>
                  {showChatsDropdown && (
                    <div className="absolute top-full bg-white mt-1 py-2 px-2 rounded-lg shadow-lg z-50">
                    {route.subroutes.map((subroute, subindex) => (
                      <NavLink key={subindex} to={subroute.to} className="block text-gray-800 hover:bg-gray-200 py-1">
                        {subroute.text}
                      </NavLink>
                    ))}
                  </div>
                  )}
                </>
              ) : (
                <NavLink
                  key={route.to}
                  to={route.to}
                  className="text-white hover:text-he-light-gray transform hover:scale-110 transition duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {route.text}
                </NavLink>
              )}
            </div>
          )) : null}
          {hasUser ? (
            <button className="text-red-400 hover:text-he-light-gray transform hover:scale-110 transition duration-300" onClick={logout}>
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
