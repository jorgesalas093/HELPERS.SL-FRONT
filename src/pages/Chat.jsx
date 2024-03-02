import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createHttp } from '../services/BaseService';




const Chat = () => {
    const { id } = useParams()
    const http = createHttp(true);
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            http.get(`/chats/${chatId}`)
                .then(response => {
                    setChat(response);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        };

        fetchUsers();
    }, [typejob]);


    return (
        <div>
            ESTOY EN EL CHAT
            <Link to={`/`}><Button text="home" /></Link>
        </div>
    );
};

export default Chat;