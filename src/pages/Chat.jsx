import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage, getChat } from "../services/ChatService";
import AuthContext from "../contexts/AuthContext";
// import { createHttp } from '../../services/BaseService';




const Chat = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    console.log('usuario del contexto', user)
    const [chat, setChat] = useState(null)
    const [text, setText] = useState('')
    console.log(id)


    //UN EFFECT PARA RECARGAR LOS MENSAJES MANDADOS EN EL CHAT CADA VEZ 
    //QUE SE EFECTUE UN CAMBIO EN LOS MENSAJES
    //con esta parte de codigo peta el back
    const fetchChat = useCallback(() => {
        getChat(id)
            .then(chat => {
                setChat(chat)
                console.log(chat)
            })
    }, [id])

    // const craeteMessage = () => {
    //     createMessage(id, { text: text })
    //         .then(messageCreated => {
    //             fetchChat()
    //         })
    // }

    useEffect(() => {
        // setInterval(() => {
        //     fetchChat()
        // }, 2000000)

        fetchChat()
    }, [id, fetchChat]);

    //ESTE FUNCIÓN LA PASAMOS LUEGO EN UN BOTON CON UN INPUT PARA MANDAR EL VALOR DE CREAR EL MENSAJE

    return (
        <div>
            ESTOY EN EL CHAT {chat && chat.id}
            {
                chat && chat.messages.map(message => {
                    console.log(message, '------------------------'); // Aquí imprimes message por consola
                    return (

                        user._id === message.id ?
                            <p key={message.id}>{message.text}</p> :
                            <h1 key={message.id}>{message.text}</h1>

                    );
                })
            }
            {/* HACER UN FORM CON UN IMPUT PARA MANDAR UN MENSAJE Y QUE SE ACTUALICE  */}
            <Link to={`/alljobs`}><Button text="jobs" /></Link>
        </div >

    );
};

export default Chat;