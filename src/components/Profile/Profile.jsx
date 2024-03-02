import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createHttp } from '../../services/BaseService';
import Input from '../Input';
import Button from '../Button';
import './Profile.css'

const Profile = ({ currentUser }) => {
  const [user, setUser] = useState(null);
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();
  const http = createHttp(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await http.get(`/users/${id}`);
        setUser(response);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [http, id]);

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCreateComment = () => {
    http.post(`/comment/${id}`, { text: commentText })
      .then(response => {
        console.log('Comment created:', response);
        // Aquí puedes realizar alguna acción adicional, como actualizar la lista de comentarios
        setCommentText(''); // Borrar el contenido del input después de comentar
      })
      .catch(error => {
        console.error('Error creating comment:', error);
      });
  };
  return (
    <div className="profile-container">
      {user && (
        <>
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

          {!currentUser && (
            <Input
              value={commentText}
              onChange={handleCommentTextChange}
              name="comment"
              placeholder="Write your comment here..."
              type="text"
              label="Your Comment"
              error={null}
              onBlur={() => { }}
            />
          )}

          {!currentUser && (
            <Button text='COMMENT' onClick={handleCreateComment}></Button>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
