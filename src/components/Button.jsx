import clsx from "clsx";
import { useState } from "react";

const Button = ({ type, onClick, text, disabled, bgcolor }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(
        "text-white bg-he-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",
        { "hover:bg-blue-800": !disabled },
        { "bg-gray-400": !disabled },
        { [bgcolor]: isClicked } // Cambia el color de fondo al color pasado en la prop bgcolor cuando el botón está clicado
      )}
    >
      {text}
    </button>
  );
};

export default Button;
