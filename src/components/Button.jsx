import { useState } from 'react';
import { TbPhotoEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrFormEdit } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
<GrDocumentUpdate />

const Button = ({ type, onClick, text, disabled, purpose, color }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };


  const getIcon = (purpose) => {
    switch (purpose) {
      case 'delete':
        return <RiDeleteBinLine />;
      case 'editphoto':
        return <TbPhotoEdit />;
      case 'edit':
        return <GrFormEdit />;
      case 'chat':
        return <IoChatbubblesOutline />;
      case 'send':
        return <BsSend />;
      case 'comment':
        return <FaRegCommentDots />;
      case 'save':
        return <GrDocumentUpdate />;
      default:
        return null;
    }
  };

  const getColor = (color) => {
    switch (color) {
      case 'red':
        return 'bg-red-400';
      case 'green':
        return 'bg-green-400';
      default:
        return 'bg-he-primary';
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <button
        type={type}
        onClick={handleClick}
        onKeyDown={handleKeyDown(event)}
        tabIndex={0} // Permite que el botón reciba el foco, pero no se porque no se ejecuta cuando se pulsa 'Enter'
        className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
          ${!disabled && !isClicked ? getColor(color) : ''}
          ${!disabled && isClicked ? 'bg-blue-800' : ''}
          ${disabled ? 'bg-gray-400' : ''}`}
      >
        {getIcon(purpose)} {/* Renderiza el icono basado en el propósito */}
        {text}
      </button>
    </div>
  );
};

export default Button;
