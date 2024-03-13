import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState, useEffect, useCallback, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { createMessage, getChat } from "../services/ChatService";
import AuthContext from "../contexts/AuthContext";

import HelpersBackground from "../assets/helpersLogo/HelpersCompleto.jpeg";

const Chat = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [chat, setChat] = useState(null);
  const [text, setText] = useState("");
  const [lastDay, setLastDay] = useState("");
  const messagesContainerRef = useRef();

  console.log(messagesContainerRef);

  useEffect(() => {
    if (messagesContainerRef.current && chat) {
      messagesContainerRef.current.scrollTo(
        0,
        messagesContainerRef.current.scrollHeight
      );
    }
  }, [chat]);

  const intervalRef = useRef(null);

  const fetchChat = useCallback(() => {
    getChat(id)
      .then((chatDB) => {
        setChat((prevChat) => {
          if (
            !prevChat ||
            (prevChat && prevChat.messages.length !== chatDB.messages.length)
          ) {
            return chatDB;
          }
          return prevChat;
        });
      })
      .catch((error) => {
        console.error("Error fetching chat:", error);
      });
  }, [id]);

  const handleChatTextChange = (event) => {
    setText(event.target.value);
  };

  const createMessageAndClearInput = (event) => {
    event.preventDefault();
    createMessage(id, { text: text })
      .then(() => {
        setText("");
        fetchChat();
      })
      .catch((error) => {
        console.error("Error creating message:", error);
      });
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    const hours = parsedDate.getHours();
    const minutes = parsedDate.getMinutes();
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  };

  const ChangeDay = (date) => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      if (currentDay !== lastDay) {
        setLastDay(currentDay);
        console.log("Se ha cambiado de día");
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
    <div
      className="font-roboto flex flex-col justify-between"
      style={{
        backgroundColor: "#e1e3e6",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.9)), url(${HelpersBackground})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        borderRadius: "5px",
        marginBottom: "30px",
        height: "calc(100vh - 70px)",
      }}
    >
      <div className="text-normal flex-shrink-0">
        {chat &&
          chat.users.map(
            (chatUser, index) =>
              chatUser._id !== user._id && (
                <div
                  key={index}
                  className="bg-blue-300 text-normal p-4 rounded-lg border border-gray-500 flex items-center justify-center"
                >
                  <Link
                    to={`/users/${chatUser._id}`}
                    className="flex items-center"
                  >
                    <img
                      src={chatUser.avatar}
                      alt="Avatar"
                      width="50"
                      className="mr-2 rounded-full"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div>
                      <h1
                        className="text-center uppercase font-bold text-sm"
                        style={{ fontFamily: "Roboto" }}
                      >
                        {chatUser.username}
                      </h1>
                      <p style={{ fontFamily: "Roboto" }}>{chatUser.typejob}</p>
                    </div>
                  </Link>
                </div>
              )
          )}
      </div>

      <div className="flex-grow overflow-y-auto" ref={messagesContainerRef}>
        {chat &&
          chat.messages.map((message, index) => {
            const isFirstMessageOfDay =
              index === 0 ||
              ChangeDay(message.createdAt) !==
                ChangeDay(chat.messages[index - 1].createdAt);
            const isCurrentUser = user._id === message.user._id;

            return (
              <div
                key={message._id}
                className={`font roboto flex rounded-md mb-1 p-4 ${
                  isCurrentUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    isCurrentUser
                      ? "bg-green-200 text-black"
                      : "bg-white text-black"
                  } rounded-lg p-2 max-w-md flex center`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className="text-xs font-normal ml-1 self-end"
                    style={{ fontSize: "10px" }}
                  >
                    {formatDate(message.createdAt)}
                  </p>
                </div>
                <div className="flex">
                  {/* Pendiente poner la fecha en el centro de la pantalla, quiza tenga que quitar el ultimo div */}
                  {isFirstMessageOfDay && (
                    <div className="flex justify-center mr-10 mb-4">
                      <p>{ChangeDay(message.createdAt)}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      <form
        className="flex flex-shrink-0 py-2"
        onSubmit={createMessageAndClearInput}
      >
        <div className="flex-grow">
          <Input
            value={text}
            onChange={handleChatTextChange}
            name="message"
            placeholder="Write your message here..."
            type="text"
            label=""
            error={null}
            onBlur={() => {}}
            className="w-full"
          />
        </div>
        <div className="">
          <Button text="" purpose="send" type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
