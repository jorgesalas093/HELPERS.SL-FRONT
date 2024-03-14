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
import { deleteCurrentUser } from '../../services/UserService';
import { logout } from '../../stores/AccessTokenStore';

// import UserProfile from './../../pages/UserProfile';

const Profile = ({ user, isCurrentUser, refetch }) => {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { user: currentUser } = useContext(AuthContext)
  const { id } = useParams();
  const navigate = useNavigate();

  //ESTADOS PARA EDIT PROFILE
  const [visible, setVisible] = useState(true);
  const [showEditName, setShowEditName] = useState(true);
  const [showEditAvatar, setShowEditAvatar] = useState(true);
  const [showEditEmail, setShowEditEmail] = useState(true);
  const [showEditBiography, setShowEditBiography] = useState(true);
  const [showEditBirthday, setShowEditBirthday] = useState(true);

//CONST PARA EDIT SHOW EDIT PROFILE
  const showEdit = () => {setVisible(false); };
  const closeEdit = () => {setVisible(true);};

  const handleshowEditUsername = () => { setShowEditName(false); };
  const handlecloseEditUsername = () => { setShowEditName(true);};

  const handleshowEditAvatar = () => { setShowEditAvatar(false);};
  const handlecloseEditAvatar = () => {setShowEditAvatar(true);};

  const handleshowEditEmail = () => { setShowEditEmail(false);};
  const handlecloseEditEmail = () => {setShowEditEmail(true);};




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

  const myFuncionChangeDay = (date) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1;
    const year = parsedDate.getFullYear();
    return `${day}-${month}-${year}`;
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

  //AQUI LA LOGICA DE MOSTRAR EL RATE
  getLikesProfile(id, currentUser.id)
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

  //LOGICA PARA QUE EL BUTTON HAGA DOS FUNCIONES A LA VEZ, BORRAR Y LOGOUT
  const handleDeleteProfileAndLogout = (userId) => {
    handleDeleteCurrentUserProfile(userId);
    logout();
  };

  //AQUI LA LOGICA DE EDITAR EL PERFIL
  // const handleEditProfile = () => {
  //   const formData = new FormData();
  //   formData.append(editInputType, editInputValue); 
  //   EditCurrentUserProfile(formData)
  //     .then(response => {
  //       console.log('Perfil editado exitosamente:', response);
  //       // Realizar alguna acción adicional después de editar el perfil
  //     })
  //     .catch(error => {
  //       console.error('Error al editar el perfil:', error);
  //     });
  // };


  // const handleInputChange = (event) => {
  //   setEditInputValue(event.target.value);
  // };

  //AQUI SE HACE LA LOGICA DE BORRAR EL PERFIL
  const handleDeleteCurrentUserProfile = (id) => {
    deleteCurrentUser(id)
      .then(response => {
        console.log('Perfil eliminado exitosamente:', response);
      })
      .catch(error => {
        console.error('Error al eliminar el perfil:', error);
      });
  }

  return (

    <div className="profile-container">
      {user && (
        <div>
          {/* LOGICA NO MOSTRAR EDITAR */}
          {isCurrentUser && (
            <div>
              {visible && (
                <div>
                  <Button text="EDIT PROFILE" onClick={showEdit} />
                </div>
              )}
              {(!visible && (<Button text="CLOSE EDIT" onClick={closeEdit} />))}
            </div>
          )}


          <div className="flex justify-center items-center mb-2">
            <img src={user.avatar} alt="Avatar" className="profile-info rounded-full" style={{ width: "250px", height: "250px" }} />

            {(!visible && (<Button
              purpose="editphoto"
              color="green"
             onClick={() => handleshowEditAvatar()}
            />))}

{(showEditAvatar && (<Button
              purpose="editphoto"
              color="green"
             onClick={() => handleshowEditAvatar()}
            />))}

             {!showEditAvatar && (
              <Input
                name="avatar"
                type="file"
                onChange={(event) => {
                  const file = event.target.files[0];
                  const formData = new FormData();
                  formData.append('avatar', file);
                  // handleEditProfile(formData);
                }}
              />
            )} 

          </div>


          <div className="flex justify-center profile-likes gap-2">
            <Stars readOnly={!id} initialRating={rating} onChange={handleRate} />
            <p>{rating.toFixed(2)} </p>
          </div>

          <div className='flex justify-center'>
            <p className="profile-username flex">
              <span className='strong'>Name:</span> {user.username}</p>

            {(!visible && (
              <Button className="mr-5"
                purpose="edit"
                color="green"
              // onClick={() => handleToggleEditInput('username')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {/* 
            {showEditInput && editInputType === 'username' && (
              <div>
                <Input
                  name="username"
                  type="text"
                  value={editInputValue}
                  onChange={handleInputChange}
                />
                <Button
                  purpose="save"
                  color="blue"
                  onClick={handleEditProfile} // Invocar la función handleEditProfile al hacer clic en el botón de guardar
                />
              </div>
            )} */}

          </div>
          <div className="flex justify-center mb-5">
            {!isCurrentUser && (
              <Button onClick={createChart} text=""
                purpose="chat" />
            )}
          </div>


          <div className='flex'>
            {(!visible && (
              <Button
                purpose="edit"
                color="green"
              // onClick={() => handleToggleEditInput('username')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}
            <p className="profile-info">Email: {user.email}</p>
          </div>

          <div className='flex'>
            {(!visible && (
              <Button
                purpose="edit"
                color="green"
              // onClick={() => handleToggleEditInput('username')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}
            <p className="profile-info">Birthday: {user.birthday}</p>
          </div>

          <div className='flex'>
            {(!visible && (
              <Button
                purpose="edit"
                color="green"
              // onClick={() => handleToggleEditInput('username')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}
            <p className="profile-info">Biography: {user.biography}</p>
          </div>

          <div className='flex justify-self-end'>

            <p className="profile-info">{user.typejob ? `Job: ${user.typejob}` : null}</p>
            <div>
              {isCurrentUser && (
                <div>
                  <Button
                    purpose="delete"
                    color="red"
                    onClick={() => setShowModal(true)}
                  />


                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="absolute inset-0 bg-black opacity-50"></div>
                      <div className="relative bg-white rounded-lg p-8">
                        <p className="mb-4">Delete profile?</p>
                        <div className="flex justify-between">
                          <button
                            className="px-4 py-2 bg-red-500 text-white rounded mr-4"
                            onClick={() => {
                              handleDeleteProfileAndLogout(user.id);
                              setShowModal(false);
                            }}
                          >
                            Delete my profile
                          </button>
                          <button
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
                            onClick={() => setShowModal(false)}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}



            </div>
          </div>
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
                  <div>
                    <p className="text-xs text-gray-500">{myDateFuncion(comment.date)}</p>

                  </div>
                </div>

                <div className='flex gap-20 justify-between items-center '>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                  {comment.writer?._id === currentUser.id && (  // Utiliza el operador de acceso opcional (?.) para evitar errores si comment.writer es null o undefined
                    <Button
                      text=""
                      onClick={() => handleDeleteComment(comment._id)}
                      purpose="delete"
                      className="text-red-500 text-xs"
                      color="red"
                    />

                  )}
                </div>

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