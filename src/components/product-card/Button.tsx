import ButtonProps from "../../interfaces/button"

function Button({title, className}: ButtonProps) {
  return (
    <button className={`${className} w-full text-center text-white font-medium p-2 rounded-xl`}>{title}</button>
  )
}

export default Button