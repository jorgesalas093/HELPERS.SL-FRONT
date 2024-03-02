import { useState,} from 'react';
import { useParams } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import './Profile.css'
import { Link } from 'react-router-dom';
import { createComment } from '../../services/CommentService';


const Profile = ({ user, isCurrentUser, refetch }) => {
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();


  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCreateComment = () => {
    createComment(id, commentText)
      .then(response => {
        console.log('Comment created:', response);
        // Aquí puedes realizar alguna acción adicional, como actualizar la lista de comentarios
        setCommentText(''); // Borrar el contenido del input después de comentar
        refetch && refetch()
      })
      .catch(error => {
        console.error('Error creating comment:', error);
      });
  };
  //CREAR CON EL EFFECT EL PODER ATACAR SOBRE EL ID DEL CHAT SI YA ESTA CREADO Y EN EL CASO DE QUE NO ESTE CREADO 
  //CREAR UNO NUEVO
  return (
    <div className="profile-container">
      {user && (
        <>
          <Link to={`/chat/${user.id}`}><Button text="CHAT" /></Link>
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

          {!isCurrentUser && (
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

          {!isCurrentUser && (
            <Button text='COMMENT' onClick={handleCreateComment}></Button>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
