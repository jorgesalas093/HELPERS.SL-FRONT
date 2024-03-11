import { useState } from 'react';

const Button = ({ type, onClick, text, disabled, purpose }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  //TOCA HACER BIEN LA LOGICA DE LOS ICONOS, PREGUNTAR A PABLO
  //PREGUNTAR A PABLO TAMBIEN PORQUE NO FUNCIONA EL event.key AL PULSAR ENTER
  const getIcon = (purpose) => {
    switch (purpose) {
      case 'delete':
        return <i className="fas fa-trash-alt"></i>; // Cambia el icono de acuerdo al propósito
      case 'edit':
        return <i className="fas fa-edit"></i>; // Cambia el icono de acuerdo al propósito
      default:
        return null;
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <button
          type={type}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0} // Permite que el botón reciba el foco, pero no se porque no se ejecuta cuando se pulsa 'Enter'
          className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
          ${!disabled && !isClicked ? 'bg-he-primary' : ''}
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
