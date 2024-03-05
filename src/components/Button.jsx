import clsx from "clsx"

const Button = ({ type, onClick, text, disabled, }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "text-white bg-he-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",
       
        { "hover:bg-blue-800": !disabled }
        ,
        { "bg-gray-400": !disabled }
        )}
    >
        {text}
      </button>
  )
}

export default Button