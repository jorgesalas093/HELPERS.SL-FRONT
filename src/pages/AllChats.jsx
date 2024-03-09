import { useState, useEffect, useContext } from 'react';
import { getAllChat } from '../services/ChatService';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const AllChats = () => {
    const [chatIds, setChatIds] = useState([]);
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        getAllChat()
            .then(data => {
                console.log(data);
                setChatIds(data);
            })
            .catch(error => {
                console.error('Error fetching chat IDs:', error);
            });
    }, []);

    return (
        <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {chatIds.map(chat => (
                    <li key={chat.id} style={{ marginBottom: '10px' }}>
                        <Link to={`/chat/${chat.id}`}>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px', backgroundColor: '#F0F0F0', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                {chat.users.map(user => (
                                    // Verificar si el usuario actual no está en el chat
                                    user.id !== currentUser.id && (
                                        <div key={user.id} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                            <img src={user.avatar} alt="User Avatar" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                                            <span>{user.username}</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllChats;
