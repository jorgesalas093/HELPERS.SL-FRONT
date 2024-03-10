import { useState } from 'react';
import clsx from 'clsx'; // Asegúrate de importar clsx si no lo has hecho

const Button = ({ type, onClick, text, disabled, purpose }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  //TOCA HACER BIEN LA LOGICA DE LOS ICONOS, PREGUNTAR A PABLO
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
    <button
      type={type}
      onClick={handleClick}
      className={clsx(
        "text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",
        { "bg-he-primary": !disabled && !isClicked },
        { "bg-blue-800": !disabled && isClicked },
        { "bg-gray-400": disabled },
      )}
    >
      {getIcon(purpose)} {/* Renderiza el icono basado en el propósito */}
      {text}
    </button>
  );
};

export default Button;
