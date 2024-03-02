import { useCallback, useEffect, useState } from "react";
import Profile from "../components/Profile/Profile";
import { useParams } from "react-router-dom";
import { getUser } from "../services/UserService";

const UserProfile = () => {
  const { id } = useParams()

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(() => {
    getUser(id)
      .then(user => {
        setUser(user)
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Profile user={user} refetch={fetchUser} />
  )
}

export default UserProfile