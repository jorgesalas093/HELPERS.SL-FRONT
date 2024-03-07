import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import './Profile.css'
import { Link } from 'react-router-dom';
import { createComment } from '../../services/CommentService';
import { deleteComment } from './../../services/CommentService';
import AuthContext from '../../contexts/AuthContext';
import { createChat } from '../../services/ChatService';
import Stars from '../Stars/Stars';


const Profile = ({ user, isCurrentUser, refetch }) => {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  const { user: currentUser } = useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log('-----------------------', id)

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const createChart = () => {
    //FUNCION DEL SERVIDOR DE CREAR CHAT PASANDO EL ID DEL PARAMS
    createChat(id)
      .then(chat => {
        navigate(`/chat/${chat.id}`)
        console.log(chat.id)
      })
      .catch(error => {
        console.error('Error fetching chats------------:', error);
      });
  };

  //AQUI SE HACE EL CREAR EL COMENTARIO

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

  //AQUI LA LOGICA DE BORRAR EL COMENTARIO
  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(response => {
        console.log('delete comment:', response);
        // Realizar alguna acción adicional, como actualizar la lista de comentarios
        refetch && refetch();
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  };
  const handleRate = (value) => {
    setRating(value);
    // Aquí puedes hacer algo con la calificación, como enviarla al servidor
  };

  return (

    <div className="profile-container">
      {user && (
        <>

          {/* AQUI TOCA METER LA LOGICA SI ESTA CREADO EL CHAT REDIRECCIONAR, SINO CREAR EL ID */}

          <div className="flex justify-center items-center">
            <img src={user.avatar} alt="Avatar" className="avatar-image" />
          </div>

          <div className="flex justify-center profile-likes">
            <Stars readOnly={false} initialRating={rating} onChange={handleRate} />
            {/* Yo esto lo quitaria
            <div className='flex justify-center items-center profile-username'>
              <p className="mr-4">{rating}</p>
            </div> 
            */}
          </div>


          <div className='flex justify-center'>
            <div>
              <p className="profile-username">Name: {user.username}</p>
            </div>
          </div>

          <div className="flex justify-center mb-5">
            {!isCurrentUser && (
              <Button onClick={createChart} text="CHAT" />
            )}
          </div>

          <p className="profile-info">Email: {user.email}</p>
          <p className="profile-info">Birthday: {user.birthday}</p>
          <p className="profile-info">Biography: {user.biography}</p>
          <p className="profile-info">{user.typejob ? `Job: ${user.typejob}` : null}</p>

          <div className="profile-comments">
            <h2>Comments:</h2>
            {user.comments.map(comment => {
              return (
                <div key={comment._id} className="comment">
                  <p className="comment-text">{comment.text}</p>
                  <p className="comment-date">{comment.date}</p>
                  {comment.writer._id === currentUser.id && (
                    <Button onClick={() => {
                      if (comment.writer._id === currentUser.id) {
                        handleDeleteComment(comment._id)
                      }

                    }} text="DELETE"> </Button>
                  )}
                  <Link to={`/users/${comment.writer._id}`}>
                    <p className="comment-info"> Posted by: {comment.writer.username}</p>
                  </Link>
                </div>
              )
            })}
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