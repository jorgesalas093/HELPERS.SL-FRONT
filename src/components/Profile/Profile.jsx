
// import Avatar from "../components/Avatar";
import "./Profile.css"

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <p className="profile-username">{user.username}</p>
      <p className="profile-info">Email: {user.email}</p>
      <p className="profile-info">Biography: {user.biography}</p>
      <p className="profile-info">Birthday: {user.birthday}</p>
      <p className="profile-info">Avatar: {user.avatar}</p>
      <div className="profile-comments">
        <h2>Comments:</h2>
        {user.comments.map(comment => (
          <div key={comment.id} className="comment">
            <p className="comment-text">{comment.text}</p>
            <p className="comment-info">Posted by: {comment.user}</p>
          </div>
        ))}
      </div>
      <p className="profile-info">Job: {user.job}</p>
    </div>
  );
};



export default Profile