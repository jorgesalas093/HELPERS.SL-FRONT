import { useEffect, useState } from 'react';
import { createHttp } from '../services/BaseService';

const AllJobs = () => {
    const [users, setUsers] = useState([]);
    const http = createHttp(true); // Usar token de acceso
console.log(users)
    useEffect(() => {
        const fetchUsers = () => {
            http.get('/users')
                .then(response => {
                    setUsers(response);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        };

        fetchUsers();
    }, [http]);
//PONER UN BARRA DE BUSQUEDA EN EL QUE SE ELIJA POR TIPÒ DE TRABAJO
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    
                </div>
            ))}
        </div>
    );
};


export default AllJobs;