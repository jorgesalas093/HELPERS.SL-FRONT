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
        <div className="font-roboto">
            <div className="text-normal p-2 mb-1 ">
                {chat && chat.users.map((chatUser, index) => (
                    chatUser._id !== user._id &&
                    <div key={index} className="bg-blue-400 text-normal p-4 rounded-lg border border-gray-500 flex justify-center">
                        <h1 className="text-center uppercase flex items-center">
                            <Link to={`/users/${chatUser._id}`}>
                                <img src={chatUser.avatar} alt="Avatar" width="50" className="mr-2 rounded-full " style={{ width: "40px", height: "40px" }} />
                            </Link>
                            {chatUser.username}
                        </h1>
                    </div>
                ))}
            </div>

            <div>
                {chat && chat.messages.map(message => {
                    return (
                        <div key={message._id} className="font roboto flex bg-gray-100 rounded-md mb-1 justify-between items-center p-4">
                            {user._id === message.user._id ?
                                <>
                                <p className="flex justify-center">modificar fecha{myFuncionChangeDay(message.createdAt)}</p>
                                <div className="font-normal  flex justify-end">
                                    <div className="bg-green-200 text-black rounded-lg p-2 mb-1 max-w-md flex center">
                                        <p className="text-sm">{message.text}</p>
                                        <p className="text-xs font-normal ml-2 mb-[-6px] bg-green-200 mt-auto p-auto">{myfuncion(message.createdAt)}</p>
                                    </div>
                                </div>
                                </>
                                :
                                <div className="flex">
                                    <div className="flex-row bg-gray-100 text-black rounded-lg p-2 mb-1 max-w-md">
                                        <div className="bg-white text-black rounded-lg p-2 mb-1 max-w-md flex center">
                                        <p className="text-sm">
                                        {message.text}</p>
                                        <p className="text-xs font-normal ml-2 mb-[-6px] bg-white mt-auto p-auto">{myfuncion(message.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>

                            }
                        </div>
                    );
                })}
            </div>
            <div className="flex">
                <div className="flex-grow"> {/* Input con ancho completo */}
                    <Input
                        value={text}
                        onChange={handleChatTextChange}
                        name="message"
                        placeholder="Write your message here..."
                        type="text"
                        label=""
                        error={null}
                        onBlur={() => { }}
                        className="w-full" // Esta clase hace que el input ocupe todo el ancho del div
                    />
                </div>
                <div className=""> {/* Botón con 1/4 del ancho */}
                    <Button text='' purpose="send" onClick={createMessageAndClearInput}>Send Message</Button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
