

const CardJob = () => {
  return (
    <div className='type-job-container'>
      {users.map(user => (
        <div key={user._id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Email: {user.id}</p>          
        </div>
      ))}
    </div>
  );
}
  

export default CardJob