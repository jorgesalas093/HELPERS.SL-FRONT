const Input = ({ value, onChange, name, placeholder, type, label, error, onBlur }) => {
  return (
    <div className="font-roboto">
      <label htmlFor={name} className="text-normal">
        {label}
      </label>
      <input
        type={type} name={name} id={name} value={value} onChange={onChange} placeholder={placeholder}
        onBlur={onBlur}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-he-primary focus:border-he-primary block w-full p-2.5"
      />
      {error && <div className="mt-2 text-red-600">{error}</div>}
  </div>
  )
}
export default Input;