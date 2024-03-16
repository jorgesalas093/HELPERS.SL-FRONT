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
import { EditCurrentUserProfile, deleteCurrentUser } from '../../services/UserService';
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

  const [editInputValue, setEditInputValue] = useState('')
  const [editBirthdayValue, setEditBirthdayValue] = useState(new Date());

  //CONST PARA EDIT SHOW EDIT PROFILE
  const showEdit = () => { setVisible(false); };
  const closeEdit = () => { setVisible(true); };

  const handleshowEditUsername = () => { setShowEditName(false); };
  const handlecloseEditUsername = () => { setShowEditName(true); };

  const handleshowEditAvatar = () => { setShowEditAvatar(false); };
  const handlecloseEditAvatar = () => { setShowEditAvatar(true); };

  const handleshowEditEmail = () => { setShowEditEmail(false); };
  const handlecloseEditEmail = () => { setShowEditEmail(true); };

  const handleshowEditBirthday = () => { setShowEditBirthday(false); };
  const handlecloseEditBirthday = () => { setShowEditBirthday(true); };

  const handleshowEditBiography = () => { setShowEditBiography(false); };
  const handlecloseEditBiography = () => { setShowEditBiography(true); };



  //FUNCIÓN PARA FORMATEAR LA FECHA 
  // const formatDate = (dateString) => {

  //   const date = new Date(dateString);

  //   // Extraer el año, mes y día del objeto de fecha
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Agregar un cero inicial si es necesario
  //   const day = String(date.getDate()).padStart(2, '0'); // Agregar un cero inicial si es necesario

  //   // Formatear la fecha en el orden deseado (dia-mes-año)
  //   const formattedDate = `${day}-${month}-${year}`;

  //   // Devolver la fecha formateada
  //   return formattedDate;
  // };

  const myFuncionChangeDay = (date) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
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


  //UNCION MODIFICAR LA FECHA DEL COMENTARIO
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

  // AQUI LA LOGICA DE EDITAR EL PERFIL
  const handleEditProfile = (formData, typeEdit) => {
    const edit = {}; // Objeto para almacenar los campos a editar
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', formData)

    switch (typeEdit) {
      case 'avatar':
        edit.avatar = formData;
        break;
      case 'email':
        edit.email = formData;
        break;
      case 'username':
        edit.username = formData;
        break;
      case 'birthday':
        edit.birthday = formData;
        break;
        case 'biography':
          edit.biography = formData;
          break;

      default:
        break;
    }

    EditCurrentUserProfile(edit)
      .then(response => {
        console.log('Perfil editado exitosamente:', response);
        // Realizar alguna acción adicional después de editar el perfil
      })
      .catch(error => {
        console.error('Error al editar el perfil:', error);
      });
  };


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

  const handleInputChange = (event) => {
    setEditInputValue(event.target.value);
  };

  const handleInputChangeBirthday = (event) => {
    setEditBirthdayValue(event.target.value);
  };

  return (

    <div className="profile-container">
      {user && (
        <div>
          {/* LOGICA NO MOSTRAR EDITAR */}
          {isCurrentUser && (
            <div className='flex justify-between'>
              <div>
                {visible && (
                  <div className="flex items-center">
                    <Button text=""
                      onClick={showEdit}
                      purpose="editprofile"
                      color="green" />
                  </div>
                )}
                {(!visible && (
                  <Button text=""
                    onClick={closeEdit}
                    purpose="closeeditprofile"
                    color="red"
                  />))}
              </div>

              <div className=''>
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

            </div>
          )}


          <div className=''>
            <div className="flex justify-center items-center mb-2">
              <img src={user.avatar} alt="Avatar" className="rounded-xl object-cover" style={{ width: "50%", height: "50%" }} />
            </div>
            {/* <div className='flex justify-around'>
              {(!visible && showEditAvatar === true && (<Button
                purpose="editphoto"
                color="green"
                onClick={() => handleshowEditAvatar()}
              />))}

              {(!showEditAvatar && (<Button
                purpose="editphoto"
                color="red"
                onClick={() => handlecloseEditAvatar()}
              />))}


              {!showEditAvatar && (
                <Input
                  name="avatar"
                  type="file"
                  onChange={(event) => {
                    const formData = event.target.files[0];
                    handleEditProfile(formData, "avatar");
                  }}
                />
              )}
            </div> */}

            <div className="flex justify-center profile-likes gap-2">
              <Stars readOnly={!id} initialRating={rating} onChange={handleRate} />
              <p>{rating.toFixed(2)} </p>
            </div>

            {/* USERNAME AND EDIT */}
            <div className='flex justify-center'>
              <p className="profile-username flex">{user.username}</p>

              {(!visible && showEditName === true && (
                <Button className="mr-5"
                  purpose="edit"
                  color="green"
                  onClick={() => handleshowEditUsername()} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
                />))}

              {(!showEditName === true && (
                <Button className="mr-5"
                  purpose="edit"
                  color="red"
                  onClick={() => handlecloseEditUsername()} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
                />))}

              {!showEditName && (
                <div className='flex'>
                  <Input
                    name="username"
                    type="text"
                    value={editInputValue}
                    onChange={handleInputChange}
                  />
                  <Button
                    purpose="save"
                    color="blue"
                    onClick={() => handleEditProfile(editInputValue, "username")} // Invocar la función handleEditProfile al hacer clic en el botón de guardar
                  />
                </div>
              )}

            </div>

            <div className="flex justify-center mb-5">
              {!isCurrentUser && (
                <Button onClick={createChart} text=""
                  purpose="chat" />
              )}
            </div>

          </div>


          {/* EMAIL AND EDIT */}
          <div className='flex'>
            {(!visible && showEditEmail === true && (
              <Button
                purpose="edit"
                color="green"
                onClick={() => handleshowEditEmail('email')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {(!showEditEmail === true && (
              <Button className="mr-5"
                purpose="edit"
                color="red"
                onClick={() => handlecloseEditEmail()} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {!showEditEmail && (
              <div className='flex'>
                <Input
                  name="email"
                  type="email"
                  value={editInputValue}
                  onChange={handleInputChange}
                />
                <Button
                  purpose="save"
                  color="blue"
                  onClick={() => handleEditProfile(editInputValue, "email")} // Invocar la función handleEditProfile al hacer clic en el botón de guardar
                />
              </div>
            )}
            <p className="profile-info">Email: {user.email}</p>
          </div>


          <div className='flex'>
            {(!visible && showEditBirthday === true && (
              <Button
                purpose="edit"
                color="green"
                onClick={() => handleshowEditBirthday('birthday')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {(!showEditBirthday === true && (
              <Button className="mr-5"
                purpose="edit"
                color="red"
                onClick={() => handlecloseEditBirthday()} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {!showEditBirthday && (
              <div className='flex'>
                <Input
                  name="birthday"
                  type="date"
                  value={editBirthdayValue}
                  onChange={handleInputChangeBirthday}
                />
                <Button
                  purpose="save"
                  color="blue"
                  onClick={() => handleEditProfile(editBirthdayValue, "birthday")} // Invocar la función handleEditProfile al hacer clic en el botón de guardar
                />
              </div>
            )}
            <p className="profile-info">Birthday: {myFuncionChangeDay(user.birthday)}</p>
          </div>


          <div className='flex'>
            {(!visible && showEditBiography === true && (
              <Button
                purpose="edit"
                color="green"
                onClick={() => handleshowEditBiography('biography')} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {(!showEditBiography === true && (
              <Button className="mr-5"
                purpose="edit"
                color="red"
                onClick={() => handlecloseEditBiography()} // Pasar el tipo de edición como argumento al hacer clic en el botón de edición
              />))}

            {!showEditBiography && (
              <div className='flex'>
                <Input
                  name="biography"
                  type="text"
                  value={editInputValue}
                  onChange={handleInputChange}
                />
                <Button
                  purpose="save"
                  color="blue"
                  onClick={() => handleEditProfile(editInputValue, "biography")} // Invocar la función handleEditProfile al hacer clic en el botón de guardar
                />
              </div>
            )}
            <p className="profile-info">Biography: {user.biography}</p>
          </div>



          <div className='flex justify-self-end'>

            <p className="profile-info">{user.typejob ? `Jobs: ${user.typejob} ` : null}</p>

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