//HOOKS
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

//COMPONENTS
import Input from '../Input';
import Button from '../Button';
import Stars from '../Stars/Stars';

//SERVICE
import { createComment } from '../../services/CommentService';
import { deleteComment } from './../../services/CommentService';
import { createChat } from '../../services/ChatService';
import postLikeProfile, { getLikesProfile } from "../../services/RateService"

//CONTEXT
import AuthContext from '../../contexts/AuthContext';

//STYLE
import './Profile.css'

const Profile = ({ user, isCurrentUser, refetch }) => {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [score, setScore] = useState(0);

  const { user: currentUser } = useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();


  //FUNCIÓN PARA FORMATEAR LA FECHA 
  const myDateFuncion = (date) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1; // Sumamos 1 porque los meses son de 0 a 11
    const year = parsedDate.getFullYear();
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedYear = year;
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedDay}-${formattedMonth}-${formattedYear} ${formattedHours}:${formattedMinutes}`;
  };

  //FUNCIÓN PARA DAR UN LIKE
  const handleRate = (rate) => {
    if (currentUser.id === id) {
      console.error('Cannot rate yourself');
      return;
    }
    setRating(rate);
    postLikeProfile(id, rate, currentUser.id)
      .then(response => {
        console.log('Rating sent to server:', response);
        setRating(Math.round(score));
      })
      .catch(error => {
        console.error('Error sending rating to server:', error);
      });
  };

  getLikesProfile(id)
    .then(response => {
      console.log(response.score)
      const totalScore = response.score;
      setRating(totalScore);
      setScore(totalScore);
    })
    .catch(error => {
      console.error('Error fetching likes:', error);
    });


  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  //FUNCION DEL SERVIDOR DE CREAR CHAT PASANDO EL ID DEL PARAMS
  const createChart = () => {
    createChat(id)
      .then(chat => {
        navigate(`/chat/${chat.id}`)

      })
      .catch(error => {
        console.error('Error fetching chats------------:', error);
      });
  };

  //AQUI SE HACE EL CREAR EL COMENTARIO
  const handleCreateComment = () => {
    createComment(id, commentText)
      .then(() => {
        setCommentText(''); // Borrar el contenido del input después de comentar
        refetch && refetch();
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

  return (

    <div className="profile-container">
      {user && (
        <div>

          <div className="flex justify-center items-center mb-2">
            <img src={user.avatar} alt="Avatar" className="profile-info rounded-full" style={{ width: "250px", height: "250px" }} />
          </div>
          <div className="flex justify-center profile-likes">
            <Stars readOnly={false} initialRating={rating} onChange={handleRate} />
            <p>{rating.toFixed(2)} </p>
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

          <div className="profile-comments bg-gray-100 p-4 rounded-md ">
            <h2 className="text-xl font-semibold mb-4">Comments:</h2>

            {user.comments.map(comment => (
              <div key={comment._id} className="flex flex-col space-y-2">

                {console.log(comment.text)}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {comment.writer && (  // Verifica si comment.writer existe antes de acceder a sus propiedades
                      <Link to={`/users/${comment.writer._id}`}>
                        <img src={comment.writer.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                      </Link>
                    )}
                    <div>
                      <p className="font-semibold">{comment.writer ? comment.writer.username : "Unknown"}</p>  {/* Si comment.writer existe, muestra el nombre de usuario, de lo contrario, muestra "Unknown" */}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{myDateFuncion(comment.date)}</p>
                </div>
                <p className="text-sm text-gray-600">{comment.text}</p>
                {comment.writer?._id === currentUser.id && (  // Utiliza el operador de acceso opcional (?.) para evitar errores si comment.writer es null o undefined
                  <Button
                    text="Delete"
                    onClick={() => handleDeleteComment(comment._id)}
                    purpose="delete"
                    className="text-red-500 text-xs"
                  />

                )}
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
        </div>
      )}
    </div>

  );
};

export default Profile;