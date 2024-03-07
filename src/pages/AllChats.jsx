import { useState, useEffect } from 'react';
import { getAllChat } from '../services/ChatService';
import { Link } from 'react-router-dom';
const AllChats = () => {
    const [chatIds, setChatIds] = useState([]);

    useEffect(() => {
    
        getAllChat()
            .then(data => {
                // console.log(data)
                setChatIds(data);
            })
            .catch(error => {
                console.error('Error fetching chat IDs:', error);
            });
    }, []);

    return (
        <div>
            <h1>All Chat:</h1>
            <ul>
                {chatIds.map(chatId => (
                    
                    <li key={chatId}>
                        <Link to={`/chat/${chatId}`}>
                            {console.log(chatId)}
                            {chatId}
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default AllChats;
