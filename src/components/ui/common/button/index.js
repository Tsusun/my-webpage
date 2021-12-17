export default function Button({ children, className, hoverable = true, variant = "grey", ...rest }) {
    const buttonColor = {
      grey: `text-white bg-gray-700 ${hoverable && "hover:bg-gray-900"}`,
      grey_light: `text-white bg-gray-500 ${hoverable && "hover:bg-gray-400"}`,
      red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
      yellow: `text-white bg-yellow-600 ${hoverable && "hover:bg-yellow-700"}`
    }
  
    return (
      <button
        {...rest} // Thanks to this no need to write onClick={onClick}
        className={`disabled:opacity-70  disabled:cursor-not-allowed px-10 py-3 border rounded-md text-base font-bold font-sans ${className} ${buttonColor[variant]}`}
      >
        {children}
      </button>
    )
  }
  