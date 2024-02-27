
// import Avatar from "../components/Avatar";

const Profile = ({ user }) => {
  return (
    <div>
      {/* <div className="flex items-center gap-x-2">
        <Avatar avatar={user.data.avatar} />
        <h1 className="font-bold text-2xl">@{user.data.username}</h1>
      </div> */}
      estas en el perfil
      <h1 className="font-bold text-2xl">{user.username}</h1>
      <p>{user.email}</p>
      <p>{user.biography}</p>
      <p>{user.birthday}</p>
      <p>{user.avatar}</p>
      {/* TOCA ATACARLO DE OTRA MANERA, ESTO DEVUELVE EL ID DEL COMENTARIO */}
      <p>{user.comments}</p>
        
      <p>{user.job}</p>
    </div>
  )
}

export default Profile