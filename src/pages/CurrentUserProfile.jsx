import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import Profile from "../components/Profile/Profile";

const CurrentUserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Profile user={user} currentUser />
  )
}

export default CurrentUserProfile