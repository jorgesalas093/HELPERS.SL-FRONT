import { Link, NavLink } from "react-router-dom";
import HelpersLogoIndex from "../components/HelppersLogo/HelpersLogoIndex";
import { useContext } from "react";
import AuthContext from '../contexts/AuthContext';
import { logout } from "../stores/AccessTokenStore";

const Navbar = () => {
  const { user, isAuthFetched } = useContext(AuthContext)

  const protectedRoutes = [
    {
      to: '/profile',
      text: 'Profile'
    },
    {
      to: '/alljobs',
      text: 'Jobs'
    },
  ]

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
        return protectedRoutes
      } else {
        return unprotectedRoutes
      }
    } else {
      return null
    }
  }

  const routes = getRoutesToShow()

  const hasUser = isAuthFetched && user;

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 h-[70px] flex items-center">
      <div className="flex justify-between items-center max-w-container mx-auto w-full">
        <Link to="/">
          <HelpersLogoIndex/>
        </Link>

        <div className="flex gap-x-3">
          {routes ? routes.map((route, index) => (
            <NavLink key={route.to} to={route.to} className="text-white hover:text-he-light-gray animate-pulse hover:animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
              {route.text}
            </NavLink>
          )) : null}
          {hasUser ? (
            <button className="text-white hover:text-he-light-gray hover:animate-bounce" onClick={logout}>
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
