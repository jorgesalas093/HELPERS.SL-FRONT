
// import Avatar from "../components/Avatar";
import "./Profile.css"
import Input from "../Input";
const Profile = ({ user, currentUser }) => {
  return (
    <div className="profile-container">
      <p className="profile-username">{user.username}</p>
      <p className="profile-info">Email: {user.email}</p>
      <p className="profile-info">Biography: {user.biography}</p>
      <p className="profile-info">Birthday: {user.birthday}</p>
      <p className="profile-info">Avatar: {user.avatar}</p>
      <p className="profile-info">{user.typejob ? `Job: ${user.typejob}` : null}</p>
      <div className="profile-comments">
        <h2>Comments:</h2>
        {user.comments.map(comment => (
          <div key={comment.id} className="comment">
            <p className="comment-text">{comment.text}</p>
            <p className="comment-info">Posted by: {comment.writer.username}</p>
          </div>
        ))}
      </div>

      {!currentUser ? (

        <Input
          value=""
          onChange={() => { }}
          name="comment"
          placeholder="Write your comment here..."
          type="text"
          label="Your Comment"
          error={null}
          onBlur={() => { }}
        />
      ) : null}
    </div>
  );
};



export default Profile