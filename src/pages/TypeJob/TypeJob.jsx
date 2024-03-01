import { useEffect, useState } from 'react';
import { createHttp } from '../../services/BaseService';
import { useParams } from 'react-router-dom';
import "./TypeJob.css"


//AQUI TOCA HACER UN USEPARAMS PARA PILLAR TODOS LOS VALORES QUE VENGAN DE CADA TIPO DE TRABAJO Y ACTUAR SOBRE ELLO EN EL BACK

const TypeJob = () => {
  const [users, setUsers] = useState([]);
  const http = createHttp(true); // Usar token de acceso
  const { typejob } = useParams();

  useEffect(() => {
    const fetchUsers = () => {
      http.get(`/users/jobs/${typejob}`)
        .then(response => {
          setUsers(response);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    };

    fetchUsers();
  }, [http]);

  return (
    <div className='type-job-container'>
      {users.map(user => (
        <div key={user._id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          -----
        </div>
      ))}
    </div>
  );
};

export default TypeJob;
