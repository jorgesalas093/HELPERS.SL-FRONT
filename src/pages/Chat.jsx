import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

import { useState, useEffect, useCallback, useContext, useRef } from 'react';

import { useParams } from 'react-router-dom';
import { createMessage, getChat } from "../services/ChatService";
import AuthContext from "../contexts/AuthContext";

const Chat = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [chat, setChat] = useState(null);
    const [text, setText] = useState('');
    const [lastDay, setLastDay] = useState('');

    const intervalRef = useRef(null);

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
                setText('');
                fetchChat();
            })
            .catch(error => {
                console.error('Error creating message:', error);
            });
    };

    const myfuncion = (date) => {
        const parsedDate = new Date(date);
        const hours = parsedDate.getHours();
        const minutes = parsedDate.getMinutes();
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes}`;
    };

    const myFuncionChangeDay = (date) => {
        const parsedDate = new Date(date);
        const day = parsedDate.getDate();
        const month = parsedDate.getMonth() + 1;
        const year = parsedDate.getFullYear();
        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            if (currentDay !== lastDay) {
                setLastDay(currentDay);
                console.log('Se ha cambiado de día');
                // Aquí puedes realizar alguna acción en el front cuando se cambie de día
            }
            fetchChat();
        }, 2000);

        fetchChat();

        return () => {
            clearInterval(intervalRef.current);
        };

    }, [id, fetchChat, lastDay]);

    return (
        <div className="border border-gray-500 rounded-lg">
            <div className="p-2 mb-1 ">
                {chat && chat.users.map((chatUser, index) => (
                    chatUser._id !== user._id &&
                    <div key={index} className="bg-blue-400 p-4 rounded-lg border border-gray-500 flex justify-center">
                        <h1 className="text-center uppercase flex items-center">
                            <Link to={`/users/${chatUser._id}`}>
                                <img src={chatUser.avatar} alt="Avatar" width="50" className="mr-2 rounded-full " style={{ width: "40px", height: "40px" }} />
                            </Link>
                            {chatUser.username}
                        </h1>
                    </div>
                ))}
            </div>

            {chat && chat.messages.map(message => {
                return (
                    <div key={message._id} className="items-center p-4 ">
                        {user._id === message.user._id ?
                            <>
                                <p className="flex justify-center">{myFuncionChangeDay(message.createdAt)}</p>
                                <div className="flex justify-end">

                                    <div className="bg-blue-500 text-white rounded-lg p-2 mb-1 max-w-md flex center">
                                        <p>{message.text}</p>
                                        <div className="flex justify-end">
                                            <img src={message.user.avatar} alt="Avatar" width="20" className="ml-2 rounded-full" />
                                        </div>
                                        <p>{myfuncion(message.createdAt)}</p>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="flex">
                                <div className="bg-gray-400 text-black rounded-lg p-2 mb-1 max-w-md">
                                    <h1 className="text-white flex items-center mr-4">
                                        <img src={message.user.avatar} width="20" className="mr-2 rounded-full" />
                                        {message.text}
                                    </h1>
                                    <p>{myfuncion(message.createdAt)}</p>
                                </div>
                            </div>
                        }
                    </div>
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
            <Link to={`/alljobs`}><Button text="Jobs" /></Link>
        </div>
    );
};

export default Chat;
