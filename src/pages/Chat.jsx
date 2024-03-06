import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState, useEffect, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage, getChat } from "../services/ChatService";
import AuthContext from "../contexts/AuthContext";

const Chat = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [chat, setChat] = useState(null);
    const [text, setText] = useState('');

    const fetchChat = useCallback(() => {
        getChat(id)
            .then(chat => {
                setChat(chat);
            })
            .catch(error => {
                console.error('Error fetching chat:', error);
            });
    }, [id]);

    const handleChatTextChange = (event) => {
        setText(event.target.value);
    };

    const createMessageAndClearInput = () => {
        createMessage(id, { text: text })
            .then(() => {
                setText(''); // Limpiar el campo de texto después de enviar el mensaje
                fetchChat();
            })
            .catch(error => {
                console.error('Error creating message:', error);
            });
    };

    useEffect(() => {
        fetchChat();
    }, [id, fetchChat]);

    return (
        <div>
            <h1>Chat Room {chat && chat.id}</h1>
            {console.log(chat)}
            {chat && chat.messages.map(message => {
                // console.log(message); // Imprimir mensaje en la consola
                return (
                    user._id === message.user._id ?
                        <p key={message._id}>{message.text}</p> :
                        <h1 key={message._id}>{message.text}</h1>
                );
            })}
            <Input
                value={text}
                onChange={handleChatTextChange}
                name="message"
                placeholder="Write your message here..."
                type="text"
                label=""
                error={null}
                onBlur={() => { }}
            />
            <Button text='SEND MESSAGE' onClick={createMessageAndClearInput}>Send Message</Button>
            {/* //volver al perfil del usuario*/}
            <Link to={`/alljobs`}><Button text="Jobs" /></Link>
        </div>
    );
};

export default Chat;
